<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Login</title>
  <link rel="stylesheet" href="{{ asset('assets/vendors/mdi/css/materialdesignicons.min.css') }}">
  <link rel="stylesheet" href="{{ asset('assets/vendors/css/vendor.bundle.base.css') }}">
  <link rel="stylesheet" href="{{ asset('assets/css/horizontal-layout/style.css') }}">
  <link rel="shortcut icon" href="{{ asset('assets/icon.png') }}" />
</head>

<body>
  <div class="container-scroller">
    <div class="container-fluid page-body-wrapper full-page-wrapper">
      <div class="main-panel">
        <div class="content-wrapper d-flex align-items-center auth px-0">
          <div class="row w-100 mx-0">
            <div class="col-lg-4 mx-auto">
              <div class="auth-form-light text-left py-5 px-4 px-sm-5">
                <div class="brand-logo">
                  <img src="{{ asset('assets/logof.png') }}" alt="logo">
                </div>
                <h4>Hallo!, Guest </h4>
                <h6 class="fw-light">Silahkan Masukan Email dan Password Anda</h6>

                @if(session('error'))
                  <div class="alert alert-danger">
                    {{ session('error') }}
                  </div>
                @endif

                <form method="POST" action="{{ route('login') }}">
                  @csrf

                  <div class="form-group">
                    <input 
                      type="email" 
                      name="email" 
                      class="form-control form-control-lg @error('email') is-invalid @enderror" 
                      placeholder="Email" 
                      value="{{ old('email') }}"
                      required
                    >
                    @error('email')
                      <span class="text-danger small">{{ $message }}</span>
                    @enderror
                  </div>

                  <div class="form-group">
                    <input 
                      type="password" 
                      name="password" 
                      class="form-control form-control-lg @error('password') is-invalid @enderror" 
                      placeholder="Password"
                      required
                    >
                    @error('password')
                      <span class="text-danger small">{{ $message }}</span>
                    @enderror
                  </div>

                  <div class="mt-3 d-grid gap-2">
                    <button type="submit" class="btn btn-primary btn-lg fw-medium auth-form-btn">SIGN IN</button>
                  </div>

                  <div class="my-2 d-flex justify-content-between align-items-center">
                    <div class="form-check">
                      <label class="form-check-label text-muted">
                        <input type="checkbox" class="form-check-input" name="remember">
                        Keep me signed in
                      </label>
                    </div>
                    
                  </div>

                </form>

              </div>
            </div>
          </div>
        </div>
      </div> <!-- main-panel ends -->
    </div> <!-- page-body-wrapper ends -->
  </div> <!-- container-scroller -->

  <script src="{{ asset('assets/vendors/js/vendor.bundle.base.js') }}"></script>
  <script src="{{ asset('assets/js/off-canvas.js') }}"></script>
  <script src="{{ asset('assets/js/hoverable-collapse.js') }}"></script>
  <script src="{{ asset('assets/js/template.js') }}"></script>
  <script src="{{ asset('assets/js/settings.js') }}"></script>
  <script src="{{ asset('assets/js/todolist.js') }}"></script>
</body>

</html>
