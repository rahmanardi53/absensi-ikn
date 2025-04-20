<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Absensi;
use App\Models\Barang;
use App\Models\Penjualan;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use Carbon\Carbon;

class DashboardController extends Controller
{
    public function index()
    {
        $role = auth()->user()->role;

        if ($role === 'owner') {
            return view('dashboard.owner');
        }

        if ($role === 'pedagang') {
            $barangs = Barang::all();   
            
            
            $penjualans = Penjualan::select('tanggal', DB::raw('SUM(subtotal) as total_uang'))
            ->where('user_id', auth()->id())
            ->groupBy('tanggal')
            ->orderBy('tanggal', 'desc')
            ->get();

            $absenAktif = \App\Models\Absensi::where('user_id', auth()->id())
            ->whereNull('off_duty')
            ->orderBy('tanggal', 'desc')
            ->first();

            $tgl = $absenAktif->tanggal ?? null;
            if ($tgl) {
                $tgl = Carbon::parse($tgl)->format('Y-m-d');
            } else {
                $tgl = today()->format('Y-m-d');
            }

            $absensis = Absensi::with('user')->where('tanggal', $tgl)->get();
            $penjualans = Penjualan::where('user_id', auth()->id())
                ->whereDate('tanggal', today())
                ->get();

            $totalHariIni = $penjualans->sum('subtotal');

            // Total jam kerja hari ini (semua sesi user login)
            $totalabsensis = Absensi::where('user_id', auth()->id())
            ->whereDate('tanggal', $tgl)
            ->whereNotNull('on_duty')
            ->whereNotNull('off_duty')
            ->get();

            $totalMenit = 0;
            foreach ($totalabsensis as $absen) {
            $on = Carbon::parse($absen->on_duty);
            $off = Carbon::parse($absen->off_duty);
            $totalMenit += $off->diffInMinutes($on);
            }
            $jamKerja = floor($totalMenit / 60);
            $menitKerja = $totalMenit % 60;

            // Penjualan hari ini
            $penjualans = Penjualan::where('user_id', auth()->id())
            ->whereDate('tanggal', $tgl)
            ->get();

            $totalPenjualan = $penjualans->sum('subtotal');
            $totalCash = $penjualans->sum('cash');
            $totalInvoice = $penjualans->sum('invoice');

            return view('dashboard.pedagang', compact('tgl','absensis', 'barangs','penjualans', 'absenAktif', 'totalHariIni', 'totalPenjualan', 'totalCash', 'totalInvoice', 'jamKerja', 'menitKerja'));
        }

        abort(403, 'Akses ditolak.');
    }

    public function rekap($tgl)
    {
            $barangs = Barang::all();   
            
            $penjualans = Penjualan::select('tanggal', DB::raw('SUM(subtotal) as total_uang'))
            ->where('user_id', auth()->id())
            ->groupBy('tanggal')
            ->orderBy('tanggal', 'desc')
            ->get();

            $absenAktif = \App\Models\Absensi::where('user_id', auth()->id())
            ->whereNull('off_duty')
            ->orderBy('tanggal', 'desc')
            ->first();

          

            $absensis = Absensi::with('user')->where('tanggal', $tgl)->get();
            $penjualans = Penjualan::where('user_id', auth()->id())
                ->whereDate('tanggal', today())
                ->get();

            $totalHariIni = $penjualans->sum('subtotal');

            // Total jam kerja hari ini (semua sesi user login)
            $totalabsensis = Absensi::where('user_id', auth()->id())
            ->whereDate('tanggal', $tgl)
            ->whereNotNull('on_duty')
            ->whereNotNull('off_duty')
            ->get();

            $totalMenit = 0;
            foreach ($totalabsensis as $absen) {
            $on = Carbon::parse($absen->on_duty);
            $off = Carbon::parse($absen->off_duty);
            $totalMenit += $off->diffInMinutes($on);
            }
            $jamKerja = floor($totalMenit / 60);
            $menitKerja = $totalMenit % 60;

            // Penjualan hari ini
            $penjualans = Penjualan::where('user_id', auth()->id())
            ->whereDate('tanggal', $tgl)
            ->get();

            $totalPenjualan = $penjualans->sum('subtotal');
            $totalCash = $penjualans->sum('cash');
            $totalInvoice = $penjualans->sum('invoice');

            return view('dashboard.pedagang', compact('tgl','absensis', 'barangs','penjualans', 'absenAktif', 'totalHariIni', 'totalPenjualan', 'totalCash', 'totalInvoice', 'jamKerja', 'menitKerja'));
        }

}
