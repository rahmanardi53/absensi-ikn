@extends('layouts.master')

@section('content')

<div class="content-wrapper">
<div class="row">
<form method="GET" class="mb-4">
    <div class="row">
        <div class="col-md-3">
            <input type="date" name="start_date" class="form-control" value="{{ $start }}">
        </div>
        <div class="col-md-3">
            <input type="date" name="end_date" class="form-control" value="{{ $end }}">
        </div>
        <div class="col-md-2">
            <button class="btn btn-primary">Tampilkan</button>
        </div>
    </div>
</form>
        <!-- Kolom KIRI: Absensi -->
        <div class="col-md-9">
            <div class="card">
            <div class="card-body">
                <p class="card-title">Data Penjualan</p>
                <p class="text-muted mb-3">Berikut adalah rekap Penjualan.</p>

                <div class="table-responsive">
                @foreach($dataPerTanggal as $harian)
    <h5 class="mt-5">{{ \Carbon\Carbon::parse($harian['tanggal'])->translatedFormat('l, d F Y') }}</h5>

    <table class="table table-bordered table-sm">
        <thead class="table-warning text-center">
            <tr>
                <th>No</th>
                <th>Nama</th>
                @foreach($harian['barangs'] as $barang)
                    <th>{{ $barang }}</th>
                @endforeach
            </tr>
        </thead>
        <tbody>
            @foreach($harian['users'] as $i => $user)
            <tr>
                <td>{{ $i+1 }}</td>
                <td>{{ $user['nama'] }}</td>
                @foreach($harian['barangs'] as $barang)
                    <td>{{ $user['produk'][$barang] ?? 0 }}</td>
                @endforeach
            </tr>
            @endforeach

            <tr class="table-secondary fw-bold">
                <td colspan="2">TOTAL</td>
                @foreach($harian['barangs'] as $barang)
                    <td>{{ $harian['total_per_produk'][$barang] }}</td>
                @endforeach
            </tr>
        </tbody>
            </table>
        @endforeach
                        </div>
                    </div>
                    </div>
                </div>

                <!-- Kolom KANAN: Penjualan -->
                <div class="col-md-3">
                    <div class="card">
                    <div class="card-body">
                        <p class="card-title">Data Penjualan</p>
                        <p class="text-muted mb-3">Rekap jumlah barang yang terjual.</p>

                        <div class="table-responsive">
                        <table class="table table-bordered w-50">
            <thead class="table-success">
                <tr>
                    <th>Produk</th>
                    <th>Total</th>
                    <th>Pemasukan</th>
                </tr>
            </thead>
            <tbody>
                @foreach($rekap as $item)
                <tr>
                    <td>{{ $item->nama_barang }}</td>
                    <td>{{ $item->total }}</td>
                    <td>Rp {{ number_format($item->pemasukan, 0, ',', '.') }}</td>
                </tr>
                @endforeach
                <tr class="fw-bold bg-light">
                    <td colspan="2">TOTAL</td>
                    <td>Rp {{ number_format($totalPemasukan, 0, ',', '.') }}</td>
                </tr>
            </tbody>
        </table>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>


@endsection