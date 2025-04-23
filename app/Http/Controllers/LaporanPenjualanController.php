<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Penjualan;
use App\Models\Barang;
use Carbon\Carbon;


class LaporanPenjualanController extends Controller
{
    public function index(Request $request)
    {
        $start = $request->start_date ?? now()->startOfMonth()->toDateString();
        $end = $request->end_date ?? now()->endOfMonth()->toDateString();

        $range = Carbon::parse($start)->daysUntil(Carbon::parse($end));
        $barangs = Barang::pluck('nama_barang')->toArray();

        $dataPerTanggal = [];

        foreach ($range as $date) {
            $tanggal = $date->toDateString();

            $penjualanHari = Penjualan::whereDate('tanggal', $tanggal)->get();

            $grouped = $penjualanHari->groupBy('user_id');

            $dataUser = [];
            foreach ($grouped as $userId => $transaksi) {
                
                $nama = $transaksi->first()->user->name ?? 'Tanpa Nama';

                $produk = [];
                foreach ($barangs as $barang) {
                    $produk[$barang] = $transaksi->where('nama_barang', $barang)->sum('jumlah');
                }

                $dataUser[] = [
                    'nama' => $nama,
                    'produk' => $produk
                ];
            }

            $totalPerProduk = [];
            foreach ($barangs as $barang) {
                $totalPerProduk[$barang] = $penjualanHari->where('nama_barang', $barang)->sum('jumlah');
            }

            $dataPerTanggal[] = [
                'tanggal' => $tanggal,
                'barangs' => $barangs,
                'users' => $dataUser,
                'total_per_produk' => $totalPerProduk
            ];
        }

        // Rekap total semua
        $rekap = Penjualan::whereBetween('tanggal', [$start, $end])
            ->selectRaw('nama_barang, SUM(jumlah) as total, SUM(invoice) as pemasukan')
            ->groupBy('nama_barang')
            ->orderBy('id', 'asc')
            ->get();

        $totalPemasukan = $rekap->sum('pemasukan');

        return view('laporan.penjualan', compact('dataPerTanggal', 'rekap', 'totalPemasukan', 'start', 'end'));
    }
}
