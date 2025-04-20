@extends('layouts.master')

@section('content')
<div class="content-wrapper">
    <div class="row">
        <div class="col-md-12 grid-margin">
            <div class="card bg-white">
                <div class="card-body d-flex align-items-center justify-content-between">
                    <h4 class="mt-1 mb-1">Hi, {{ auth()->user()->name }}!</h4>
                    <!-- Tombol trigger modal -->
                    <!--<div class="d-flex">
                     Tombol Absensi 
                    <button class="btn btn-info me-2 d-none d-md-block" data-bs-toggle="modal" data-bs-target="#absenModal">
                        <i class="mdi mdi-calendar-check menu-icon"></i>
                        Absensi
                    </button>

                   
                    <button class="btn btn-warning d-none d-md-block" data-bs-toggle="modal" data-bs-target="#penjualanModal">
                        <i class="mdi mdi-cart menu-icon"></i>
                        Penjualan
                    </button>
                    </div>-->


                </div>
            </div>
        </div>
    </div>

    

</div> <!-- end content-wrapper -->

@endsection
@push('scripts')

@endpush

