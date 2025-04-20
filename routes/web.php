<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AbsensiController;
use App\Http\Controllers\PenjualanController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\LaporanPenjualanController;
use App\Http\Controllers\RekapAbsensiController;
use App\Models\Absensi;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});



Route::get('/', function () {
    return redirect('/dashboard');
});

Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['auth'])->group(function () {
    Route::get('/absensi', [AbsensiController::class, 'index']);
    Route::post('/absensi/datang', [AbsensiController::class, 'store'])->name('absen.datang');
    Route::post('/absensi/pulang', [AbsensiController::class, 'pulang'])->name('absen.pulang');
    
    Route::get('/rekap/{tgl}', [DashboardController::class, 'rekap'])->name('rekap');

    Route::get('/penjualan', [PenjualanController::class, 'index']);
    Route::post('/penjualan', [PenjualanController::class, 'store']);
    Route::post('/penjualan/{id}', [PenjualanController::class, 'update'])->name('penjualan.update');
    Route::delete('/penjualan/{id}/hapus', [PenjualanController::class, 'destroy'])->name('penjualan.destroy');



    Route::middleware('role:owner')->get('/rekap', [PenjualanController::class, 'rekap']);

    Route::get('/laporan-penjualan', [LaporanPenjualanController::class, 'index'])->name('laporan.penjualan');
    Route::get('/rekap-absensi', [RekapAbsensiController::class, 'index'])->name('rekap.absensi');

    Route::resource('users', \App\Http\Controllers\UserController::class);


});


require __DIR__.'/auth.php';
