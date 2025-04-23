<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Absensi;
use App\Models\Penjualan;
use App\Models\Barang;

class PenjualanController extends Controller
{
    public function index() {
        return view('penjualan.form');
    }
    
    public function store(Request $request) {
        foreach ($request->items as $item) {
            $barang = Barang::where('id',$request->nama_barang)->first();
            $harga = $barang->harga + $barang->komisi ?? 0;
            $invoice = $barang->harga * $item['jumlah'];
            $cash = $barang->komisi * $item['jumlah'];
            $subtotal = $harga * $item['jumlah'];
            
        
            $penjualan = Penjualan::create([
                'user_id' => auth()->id(),
                'tanggal' => $request->tanggal,
                'nama_barang' => $barang->nama_barang,
                'jumlah' => $item['jumlah'],
                'jenis_penjualan' => $barang->id,
                'harga_satuan' => $harga,
                'subtotal' => $subtotal,
                'cash' => $cash ,
                'invoice' =>  $invoice ,
                'tf' => 0,
            ]);
        }
        return back()->with('success', 'Penjualan disimpan.');
    }

    public function update(Request $request, $id)
    {
        $penjualan = \App\Models\Penjualan::where('id', $id)->where('user_id', auth()->id())->firstOrFail();
        $barang = Barang::find($penjualan->jenis_penjualan)->first();

        $subtotal = ($barang->harga+ $barang->komisi) * $request->jumlah;
        $cash = $barang->komisi * $request->jumlah;

        $penjualan->update([
            'jumlah' => $request->jumlah,
            'harga_satuan' => $barang->harga + $barang->komisi,
            'subtotal' => $subtotal,
            'cash' => $cash,
            'invoice' => $barang->harga*$request->jumlah,
            'tf' =>  0,
        ]);

        return back()->with('success', 'Penjualan berhasil diperbarui.');
    }

    public function destroy($id)
    {
        $penjualan = \App\Models\Penjualan::where('id', $id)->where('user_id', auth()->id())->firstOrFail();
        $penjualan->delete();

        return back()->with('success', 'Penjualan berhasil dihapus.');
    }

    
    public function rekap() {
        $data = Penjualan::where('user_id', auth()->id())
                 ->selectRaw('tanggal, sum(jumlah) as total')
                 ->groupBy('tanggal')
                 ->get();
        return view('penjualan.rekap', compact('data'));
    }
    
}
