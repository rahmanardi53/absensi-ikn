@extends('layouts.master')

@section('content')
<div class="content-wrapper">
    <div class="row">
        <div class="col-md-12 grid-margin">
            <div class="card bg-white">
                <div class="card-body d-flex align-items-center justify-content-between">
                    <h4 class="mt-1 mb-1">Hi, {{ auth()->user()->name }}!</h4>
                    <!-- Tombol trigger modal -->
                    <div class="d-flex">
                    {{-- Belum ada absen aktif (boleh absen datang) --}}
                    @if(!$absenAktif)
                        <button class="btn btn-info me-2" data-bs-toggle="modal" data-bs-target="#absenDatangModal">
                        <i class="mdi mdi-login"></i> Absen Datang
                        </button>

                    {{-- Ada absen aktif (boleh absen pulang + input penjualan) --}}
                    @else
                        <button class="btn btn-secondary me-2" data-bs-toggle="modal" data-bs-target="#absenPulangModal">
                        <i class="mdi mdi-logout"></i> Absen Pulang
                        </button>

                        <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#penjualanModal">
                        <i class="mdi mdi-cart"></i> Penjualan
                        </button>
                    @endif
                    </div>




                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <!-- Card: Total Sales -->
        <div class="col-md-3 grid-margin stretch-card">
            <div class="card border-0 border-radius-2 bg-success">
                <div class="card-body">
                    <div class="d-flex flex-md-column flex-xl-row flex-wrap align-items-center justify-content-between">
                        <div class="icon-rounded-inverse-success icon-rounded-lg">
                            <i class="mdi mdi-arrow-top-right"></i>
                        </div>
                        <div class="text-white">
                            <p class="fw-medium mt-md-2 mt-xl-0 text-md-center text-xl-left">Jam Kerja</p>
                            <div class="d-flex flex-md-column flex-xl-row flex-wrap align-items-baseline">
                                <h3 class="mb-0 me-1">{{ $jamKerja }} jam {{ $menitKerja }} menit</h3>
        
                                <small>Hari ini</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Card: Total Purchases -->
        <div class="col-md-3 grid-margin stretch-card">
            <div class="card border-0 border-radius-2 bg-info">
                <div class="card-body">
                    <div class="d-flex flex-md-column flex-xl-row flex-wrap align-items-center justify-content-between">
                        <div class="icon-rounded-inverse-info icon-rounded-lg">
                            <i class="mdi mdi-basket"></i>
                        </div>
                        <div class="text-white">
                            <p class="fw-medium mt-md-2 mt-xl-0 text-md-center text-xl-left">Total Penjualan</p>
                            <div class="d-flex flex-md-column flex-xl-row flex-wrap align-items-baseline">
                            <h3 class="mb-0 me-1">Rp {{ number_format($totalPenjualan + $totalCash, 0, ',', '.') }}</h3>
                                <small>Hari ini</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Card: Total Orders -->
        <div class="col-md-3 grid-margin stretch-card">
            <div class="card border-0 border-radius-2 bg-danger">
                <div class="card-body">
                    <div class="d-flex flex-md-column flex-xl-row flex-wrap align-items-center justify-content-between">
                        <div class="icon-rounded-inverse-danger icon-rounded-lg">
                            <i class="mdi mdi-chart-donut-variant"></i>
                        </div>
                        <div class="text-white">
                            <p class="fw-medium mt-md-2 mt-xl-0 text-md-center text-xl-left">Total Cash</p>
                            <div class="d-flex flex-md-column flex-xl-row flex-wrap align-items-baseline">
                            <h3 class="mb-0 me-1">Rp {{ number_format($totalCash, 0, ',', '.') }}</h3>

                                <small>Hari ini</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Card: Total Growth -->
        <div class="col-md-3 grid-margin stretch-card">
            <div class="card border-0 border-radius-2 bg-warning">
                <div class="card-body">
                    <div class="d-flex flex-md-column flex-xl-row flex-wrap align-items-center justify-content-between">
                        <div class="icon-rounded-inverse-warning icon-rounded-lg">
                            <i class="mdi mdi-chart-multiline"></i>
                        </div>
                        <div class="text-white">
                            <p class="fw-medium mt-md-2 mt-xl-0 text-md-center text-xl-left">Total Invoice</p>
                            <div class="d-flex flex-md-column flex-xl-row flex-wrap align-items-baseline">
                            <h3 class="mb-0 me-1">Rp {{ number_format($totalInvoice, 0, ',', '.') }}</h3>

                                <small>Hari ini</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <!-- Kolom KIRI: Absensi -->
        <div class="col-md-6">
            <div class="card">
            <div class="card-body">
                <p class="card-title">Data Absensi</p>
                <p class="text-muted mb-3">Berikut adalah rekap absensi  pada tanggal : {{$tgl}}</p>

                <div class="table-responsive">
                <table class="table table-striped">
                    <thead>
                    <tr class="border-top-0">
                        <th class="text-muted">Tanggal</th>
                        <th class="text-muted">Nama</th>
                        <th class="text-muted">Jam Masuk</th>
                        <th class="text-muted">Jam Pulang</th>
                        <th class="text-muted">Jumlah Jam</th>
                    </tr>
                    </thead>
                    <tbody>
                    @foreach($absensis as $absen)
                    <tr>
                        <td>{{ \Carbon\Carbon::parse($absen->tanggal)->format('d M Y') }}</td>
                        <td>{{ $absen->user->name }}</td>
                        <td>{{ $absen->on_duty }}</td>
                        <td>{{ $absen->off_duty }}</td>
                        <td>
                        @php
                            $on = \Carbon\Carbon::parse($absen->on_duty);
                            $off = \Carbon\Carbon::parse($absen->off_duty);
                            $durasi = $off->diff($on);
                        @endphp
                        <span class="badge badge-primary badge-fw">
                            {{ $durasi->h }} jam {{ $durasi->i }} menit
                        </span>
                        </td>
                    </tr>
                    @endforeach
                    </tbody>
                </table>

                @if($absensis->isEmpty())
                    <p class="text-muted text-center my-4">Belum ada data absensi.</p>
                @endif
                </div>
            </div>
            </div>
        </div>

        <!-- Kolom KANAN: Penjualan -->
        <div class="col-md-6">
            <div class="card">
            <div class="card-body">
                <p class="card-title">Data Penjualan</p>
                <p class="text-muted mb-3">Rekap jumlah barang yang terjual pada tanggal : {{$tgl}}</p>

                <div class="table-responsive">
                <table class="table table-striped">
                    <thead>
                        <tr class="border-top-0">
                        <th class="text-muted">Barang</th>
                        <th class="text-muted">Jumlah</th>
                        <th class="text-muted">Harga</th>
                        <th class="text-muted">Cash</th>
                        <th class="text-muted">Invoice</th>
                        <th class="text-muted">Total</th>
                        @if($absenAktif) {{-- Kalau masih aktif, tampilkan aksi --}}
                        <th class="text-muted">Aksi</th>
                        @endif
                        </tr>
                    </thead>
                    <tbody>
                        
                        @foreach($penjualans as $penjualan)
                        <tr>
                            <td>{{ $penjualan->nama_barang }}</td>
                            <td>{{ $penjualan->jumlah }}</td>
                            <td>Rp {{ number_format($penjualan->harga_satuan, 0, ',', '.') }}</td>
                            <td>Rp {{ number_format($penjualan->cash, 0, ',', '.') }}</td>
                            <td>Rp {{ number_format($penjualan->invoice, 0, ',', '.') }}</td>
                            <td><strong>Rp {{ number_format($penjualan->subtotal, 0, ',', '.') }}</strong></td>


                            <td>
                                @if($absenAktif)
                                    <!-- Tombol Edit -->
                                    <button class="btn btn-sm btn-warning" data-bs-toggle="modal" data-bs-target="#editPenjualanModal{{ $penjualan->id }}">
                                    Edit
                                    </button>

                                    <!-- Tombol Hapus -->
                                    <button class="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#hapusPenjualanModal{{ $penjualan->id }}">
                                    Hapus
                                    </button>
                                @endif
                                </td>
                            </tr>
                            @if(!$penjualans->isEmpty())
                        
                            <!-- Modal Edit -->
                            <div class="modal fade" id="editPenjualanModal{{ $penjualan->id }}" tabindex="-1" aria-labelledby="editPenjualanLabel{{ $penjualan->id }}" aria-hidden="true">
                            <div class="modal-dialog">
                                <form method="POST" action="{{ route('penjualan.update', $penjualan->id) }}">
                                @csrf
                                @method('POST')
                                <div class="modal-content">
                                    <div class="modal-header">
                                    <h5 class="modal-title" id="editPenjualanLabel{{ $penjualan->id }}">Edit Penjualan</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Tutup"></button>
                                    </div>
                                    <div class="modal-body">
                                    <div class="mb-3">
                                        <label>Barang</label>
                                        <input type="text" class="form-control" value="{{ $penjualan->nama_barang }}" disabled>
                                    </div>
                                    <div class="mb-3">
                                        <label>Jumlah</label>
                                        <input type="number" name="jumlah" class="form-control" value="{{ $penjualan->jumlah }}" required>
                                    </div>
                                   
                                    </div>
                                    <div class="modal-footer">
                                    <button type="submit" class="btn btn-primary">Simpan Perubahan</button>
                                    </div>
                                </div>
                                </form>
                            </div>
                            </div>
                            @endif
                        @endforeach
                    </tbody>
                    </table>



                @if($penjualans->isEmpty())
                    <p class="text-muted text-center my-4">Belum ada data penjualan.</p>
                @endif
                </div>
            </div>
            </div>
        </div>
        </div>



</div> <!-- end content-wrapper -->

<!-- Modal Absen Datang -->
<div class="modal fade" id="absenDatangModal" tabindex="-1" aria-labelledby="absenDatangLabel" aria-hidden="true">
  <div class="modal-dialog">
    <form method="POST" action="{{ route('absen.datang') }}">
      @csrf
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="absenDatangLabel">Absen Datang</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Tutup"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="tanggal" class="form-label">Tanggal</label>
            <input type="date" class="form-control" name="tanggal" value="{{ date('Y-m-d') }}" required>
          </div>
          <div class="mb-3">
            <label for="on_duty" class="form-label">Jam Masuk</label>
            <input type="time" class="form-control" name="on_duty" required>
          </div>
        </div>
        <div class="modal-footer">
          <button type="submit" class="btn btn-info">Simpan Absen Datang</button>
        </div>
      </div>
    </form>
  </div>
</div>


<!-- Modal Absen Pulang -->
<div class="modal fade" id="absenPulangModal" tabindex="-1" aria-labelledby="absenPulangLabel" aria-hidden="true">
  <div class="modal-dialog">
    <form method="POST" action="{{ route('absen.pulang') }}">
      @csrf
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="absenPulangLabel">Absen Pulang</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Tutup"></button>
        </div>
        <div class="modal-body">
            <div class="mb-3">
            <label for="tanggal" class="form-label">Tanggal</label>
            <input type="date" class="form-control" name="tanggal" value="{{ date('Y-m-d') }}" required>
          </div>
          <div class="mb-3">
            <label for="off_duty" class="form-label">Jam Pulang</label>
            <input type="time" class="form-control" name="off_duty" required>
          </div>
        </div>
        <div class="modal-footer">
          <button type="submit" class="btn btn-secondary">Simpan Absen Pulang</button>
        </div>
      </div>
    </form>
  </div>
</div>



<!-- Modal Penjualan -->
<div class="modal fade" id="penjualanModal" tabindex="-1" aria-labelledby="penjualanModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <form method="POST" action="{{ url('/penjualan') }}">
      @csrf
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="penjualanModalLabel">Form Penjualan</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Tutup"></button>
        </div>
        <div class="modal-body">

            <div class="row">
                <div class="col-md-4 mb-2">
                    <label>Tanggal</label>
                    <input type="date" name="tanggal" class="form-control" required>
                </div>

                <div class="col-md-4 mb-2">
                    <label>Barang</label>
                    <select name="nama_barang" class="form-control" required>
                    <option value="">Pilih Barang</option>
                    @foreach($barangs as $barang)
                        <option value="{{ $barang->id }}">{{ $barang->nama_barang }}</option>
                    @endforeach
                    </select>
                </div>

                <div class="col-md-4 mb-2">
                    <label>Jumlah</label>
                    <input type="number" name="items[0][jumlah]" class="form-control" required>
                </div>

               
                </div>
          
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
          <button type="submit" class="btn btn-primary">Simpan Penjualan</button>
        </div>
      </div>
    </form>
  </div>
</div>
@if(!$penjualans->isEmpty())
@foreach($penjualans as $penjualan)
<!-- Modal Konfirmasi Hapus -->
<div class="modal fade" id="hapusPenjualanModal{{ $penjualan->id }}" tabindex="-1" aria-labelledby="hapusPenjualanLabel{{ $penjualan->id }}" aria-hidden="true">
  <div class="modal-dialog">
    <form method="POST" action="{{ route('penjualan.destroy', $penjualan->id) }}">
      @csrf
      @method('DELETE')
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="hapusPenjualanLabel{{ $penjualan->id }}">Hapus Penjualan</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Tutup"></button>
        </div>
        <div class="modal-body">
          <p>Yakin ingin menghapus penjualan <strong>{{ $penjualan->nama_barang }}</strong>?</p>
          <p class="text-danger small mb-0">Aksi ini tidak bisa dibatalkan.</p>
        </div>
        <div class="modal-footer">
          <button type="submit" class="btn btn-danger">Ya, Hapus</button>
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
        </div>
      </div>
    </form>
  </div>
</div>

@endforeach
@endif


@endsection
@push('scripts')

@endpush

