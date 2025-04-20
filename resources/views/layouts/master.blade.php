<!DOCTYPE html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>Fily Premium Bootstrap Admin Dashboard Template</title>
  <!-- plugins:css -->
  <link rel="stylesheet" href="{{url('assets/vendors/mdi/css/materialdesignicons.min.css')}}">
  <link rel="stylesheet" href="{{url('assets/vendors/css/vendor.bundle.base.css')}}">
  <!-- endinject -->
  <!-- Plugin css for this page -->
  <!-- End plugin css for this page -->
  <!-- inject:css -->
  <link rel="stylesheet" href="{{url('assets/css/horizontal-layout/style.css')}}">
  <!-- endinject -->
  <link rel="shortcut icon" href="{{url('assets/images/favicon.png')}}" />
  <style>
    input[type="date"],
    input[type="number"],
    select,
    input[type="text"] {
        height: 38px !important; /* sesuaikan dengan yang lain */
        padding-top: 6px;
        padding-bottom: 6px;
    }

  </style>
</head>

<body>
  <div class="container-scroller">
    <!-- partial:partials/_horizontal-navbar.html -->
    <div class="horizontal-menu">
  <nav class="navbar top-navbar col-lg-12 col-12 p-0">
    <div class="container">
      <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
        <a class="navbar-brand brand-logo" href="index.html"><img src="{{url('assets/logo.png')}}"
            alt="logo" /></a>
        <a class="navbar-brand brand-logo-mini" href="index.html"><img src="{{url('assets/logo-mini.png')}}"
            alt="logo" /></a>
      </div>
      <div class="navbar-menu-wrapper d-flex align-items-center">
       
        <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button"
          data-bs-toggle="horizontal-menu-toggle">
          <span class="mdi mdi-menu"></span>
        </button>
      </div>
    </div>
  </nav>
  <nav class="bottom-navbar">
    <div class="container">
    <ul class="nav page-navigation">

{{-- MENU UNTUK OWNER --}}
@if(auth()->check() && auth()->user()->role === 'owner')
  <li class="nav-item">
    <a class="nav-link" href="{{route('dashboard')}}">
      <i class="mdi mdi-home-outline menu-icon"></i>
      <span class="menu-title">Dashboard</span>
    </a>
  </li><li class="nav-item">
    <a class="nav-link" href="{{route('rekap.absensi')}}">
      <i class="mdi mdi-calendar-check menu-icon"></i>
      <span class="menu-title">Rekap Absensi</span>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="{{route('laporan.penjualan')}}">
      <i class="mdi mdi-file-chart menu-icon"></i>
      <span class="menu-title">Rekap Penjualan</span>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="{{route('users.index')}}">
      <i class="mdi mdi mdi-account-multiple menu-icon"></i>
      <span class="menu-title">Data User</span>
    </a>
  </li>
@endif

{{-- MENU UNTUK PEDAGANG --}}
@if(auth()->check() && auth()->user()->role === 'pedagang')
  <li class="nav-item">
    <a class="nav-link" href="{{route('dashboard')}}">
      <i class="mdi mdi-home-outline menu-icon"></i>
      <span class="menu-title">Dashboard </span>
    </a>
  </li>
  <li class="nav-item">
  <a class="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#rekapModal">

      <i class="mdi mdi-chart-bar menu-icon"></i>
      <span class="menu-title">Rekapan Saya</span>
    </a>
  </li>
 

@endif
  <li class="nav-item">
    <a href="#" class="nav-link" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
      <i class="mdi mdi-logout menu-icon"></i>
      <span class="menu-title">Logout</span>
    </a>

    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
      @csrf
    </form>
  </li>


</ul>

    </div>
  </nav>
</div>
    <!-- partial -->
    <div class="container-fluid page-body-wrapper">
      <div class="main-panel">
       @yield('content')
        <!-- partial:partials/_footer.html -->
        <footer class="footer">
          <div class="w-100 clearfix">
            
            <span class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Ibukota Nusantara Roleplay <i class="mdi mdi-heart-outline text-danger"></i></span>
          </div>
        </footer>
        <!-- partial -->
      </div>
      <!-- main-panel ends -->
    </div>
    <!-- page-body-wrapper ends -->
  </div>
  <!-- container-scroller -->
 <!-- Modal Pilih Tanggal Rekapan -->
 <div class="modal fade" id="rekapModal" tabindex="-1">
  <div class="modal-dialog">
    <form id="rekapForm" method="GET">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Pilih Tanggal Rekapan</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <input type="date" name="tanggal" id="tanggalRekap" class="form-control" required>
        </div>
        <div class="modal-footer">
          <button type="submit" class="btn btn-primary">Lihat Rekap</button>
        </div>
      </div>
    </form>
  </div>
</div>
  <!-- plugins:js -->
  <script src="{{url('assets/vendors/js/vendor.bundle.base.js')}}"></script>
  <!-- endinject -->
  <!-- Plugin js for this page -->
  <script src="{{url('assets/vendors/chart.js/chart.umd.js')}}"></script>
  <script src="{{url('assets/vendors/progressbar.js/progressbar.min.js')}}"></script>
  <!-- End plugin js for this page -->
  <!-- inject:js -->
  <script src="{{url('assets/js/off-canvas.js')}}"></script>
  <script src="{{url('assets/js/hoverable-collapse.js')}}"></script>
  <script src="{{url('assets/js/template.js')}}"></script>
  <script src="{{url('assets/js/settings.js')}}"></script>
  <script src="{{url('assets/js/todolist.js')}}"></script>
  <!-- endinject -->
  <!-- Custom js for this page-->
  <script src="{{url('assets/js/dashboard.js')}}"></script>
  <script src="{{url('assets/js/todolist.js')}}"></script>
  <!-- End custom js for this page-->
  <script>
  document.getElementById('rekapForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const tgl = document.getElementById('tanggalRekap').value;
    if (tgl) {
      window.location.href = `{{ url('rekap') }}/${tgl}`;

    }
  });
</script>

   @yield('script')
</body>

</html>