<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Absensi;
use App\Models\User;
use Carbon\Carbon;

class RekapAbsensiController extends Controller
{
    public function index(Request $request)
    {
        $start = $request->start_date ?? now()->startOfMonth()->toDateString();
        $end = $request->end_date ?? now()->endOfMonth()->toDateString();

        $range = Carbon::parse($start)->daysUntil(Carbon::parse($end));
        $users = User::where('role', 'pedagang')->get();


        $data = [];

        foreach ($users as $user) {
            $row = ['nama' => $user->name];

            $totalMenitUser = 0;

            foreach ($range as $tanggal) {
                $absens = Absensi::where('user_id', $user->id)
                    ->whereDate('tanggal', $tanggal)
                    ->get();

                $listOn = [];
                $listOff = [];
                $durasiTanggal = 0;

                foreach ($absens as $absen) {
                    if ($absen->on_duty && $absen->off_duty) {
                        $jamMasuk = Carbon::parse($absen->on_duty);
                        $jamPulang = Carbon::parse($absen->off_duty);
                        $listOn[] = $jamMasuk->format('H:i');
                        $listOff[] = $jamPulang->format('H:i');

                        $durasi = $jamPulang->diffInMinutes($jamMasuk);
                        $durasiTanggal += $durasi;
                    }
                }

                $jamDurasi = floor($durasiTanggal / 60);
                $menitDurasi = $durasiTanggal % 60;
                $durasiText = $durasiTanggal > 0 ? "$jamDurasi jam $menitDurasi menit" : '-';

                $totalMenitUser += $durasiTanggal;

                $key = $tanggal->format('d/m/Y');
                $row[$key] = [
                    'on_duty' => implode('; ', $listOn) ?: '-',
                    'off_duty' => implode('; ', $listOff) ?: '-',
                    'durasi' => $durasiText,
                ];
            }

            // Hitung total jam dan menit
            $jam = floor($totalMenitUser / 60);
            $mnt = $totalMenitUser % 60;
            $row['total_jam'] = "$jam jam $mnt menit";


            $data[] = $row;
        }

        return view('rekap.absensi', compact('data', 'start', 'end', 'range'));
    }
}
