@extends('layouts.app')
@section('content')

<div class="container-fluid">
  <div class="row min-vh-100">
    <div style="background-image: url('img/bg2.png');" class="col-sm-7 intro-right d-none d-md-block d-xs-block"></div>

    <div class="col-sm-5 mx-auto align-items-center p-5">
        <div class="row text-center">
            <div class="col pt-5 ">
              <img src="{{ asset('img/logo-full-dark.png') }}" class="img-fluid" width="200" alt="Template Logo">

          </div>

      </div>
      <div class="row">
        <div class="col">
            <form method="POST" action="{{ route('login') }}" class="login100-form validate-form">
                @csrf
                <!-- Regular Input with Floating labels -->
                <div class="form-group pmd-textfield pmd-textfield-floating-label">
                   <label for="email" class="control-label">
                     Username
                 </label>
                 <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus maxlength="191">

                 @error('email')
                 <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
                @enderror

            </div>
            <!-- Password Input -->
            <div class="form-group pmd-textfield pmd-textfield-floating-label">
              <label for="password" class="control-label">
                Password
            </label>

            <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password" maxlength="191" minlength="8">

            @error('password')
            <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
            @enderror


        </div>


        <div class="d-flex justify-content-between pt-3 pb-3">
            <!-- Simple checkbox with label, checked -->
            <div class="checkbox pmd-default-theme ">
                <label class="pmd-checkbox pmd-checkbox-ripple-effect">
                    <input type="checkbox" value="" checked>
                    <span>Recordar usuario</span>
                </label>
            </div>

                <a href="#" class="txt1">
                    Forgot Password?
                </a>
        </div>


        <div class="container-login100-form-btn">
            <!--Primary raised button with ripple effect -->
            <button type="submit" class="btn pmd-btn-raised pmd-ripple-effect btn-primary w-100">Login</button>

        </div>

    </form>
</div>

</div>

</div>
</div>
</div>

@endsection
