@extends('layouts.master')

@section('content')

<div class="content-wrapper">
<div class="row">
<div class="col-md-12">
<div class="card">
            <div class="card-body">
                <p class="card-title">Data Penjualan</p>
                <p class="text-muted mb-3">Berikut adalah rekap Penjualan.</p>


<form method="GET" class="row mb-4">
    <div class="col-md-3">
        <input type="date" name="start_date" class="form-control" value="{{ $start }}">
    </div>
    <div class="col-md-3">
        <input type="date" name="end_date" class="form-control" value="{{ $end }}">
    </div>
    <div class="col-md-3">
        <button class="btn btn-primary">Tampilkan</button>
    </div>
</form>
<div class="table-responsive">
<table class="table table-bordered table-sm text-center align-middle">
    <thead>
        <tr>
        <th class="sticky-col bg-white" rowspan="2">Nama</th>

            @foreach($range as $tanggal)
                <th colspan="3">{{ \Carbon\Carbon::parse($tanggal)->format('d/m/Y') }}</th>
            @endforeach
        </tr>
        <tr>
            @foreach($range as $tanggal)
                <th>On Duty</th>
                <th>Off Duty</th>
                <th>Jumlah Jam</th>
                
            @endforeach
            <th rowspan="2">Total Jam</th>
        </tr>
        

    </thead>
    <tbody>
        @foreach($data as $user)
        <tr>
        <td class="sticky-col bg-white text-start">{{ $user['nama'] }}</td>

            @foreach($range as $tanggal)
                @php $key = \Carbon\Carbon::parse($tanggal)->format('d/m/Y') @endphp
                <td>{{ $user[$key]['on_duty'] ?? '-' }}</td>
                <td>{{ $user[$key]['off_duty'] ?? '-' }}</td>
                <td>{{ $user[$key]['durasi'] ?? '-' }}</td>
                
            @endforeach
            <td>{{ $user['total_jam'] }}</td>
        </tr>
        @endforeach
    </tbody>
</table>
<style>
    .sticky-col {
        position: sticky;
        left: 0;
        z-index: 1;
    }

    /* Biar header nama di atas semua */
    .sticky-col:first-child {
        z-index: 2;
    }

    /* Optional: supaya kelihatan bersih */
    .table-responsive {
        overflow-x: auto;
    }
</style>

</div>
</div>
</div>
</div>
</div>
</div>
@endsection
