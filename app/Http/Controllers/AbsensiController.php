<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Absensi;
use Illuminate\Support\Facades\Auth;

class AbsensiController extends Controller
{
    public function index()
    {
        return view('absensi.form');
    }

    public function store(Request $request)
    {
        Absensi::create([
            'user_id' => auth()->id(),
            'tanggal' => $request->tanggal,
            'on_duty' => $request->on_duty,
        ]);

        return back()->with('success', 'Absen datang berhasil.');
    }

    public function pulang(Request $request)
    {
        $absenAktif = Absensi::where('user_id', auth()->id())
            ->whereDate('tanggal', $request->tanggal)
            ->whereNull('off_duty')
            ->latest()
            ->first();

        if ($absenAktif) {
            $absenAktif->update([
                'off_duty' => $request->off_duty,
            ]);

            return back()->with('success', 'Absen pulang berhasil.');
        }

        return back()->with('error', 'Tidak ditemukan absen datang yang aktif.');
    }
}
