<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>{{env('APP_NAME')}}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link href="https://fonts.googleapis.com/css?family=Work+Sans:300,400,,500,600,700" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('css/colors.css') }}">

    <link rel="stylesheet" href="{{ asset('landing/css/open-iconic-bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('landing/css/animate.css') }}">
    <link rel="stylesheet" href="{{ asset('landing/css/owl.carousel.min.css') }}">
    <link rel="stylesheet" href="{{ asset('landing/css/owl.theme.default.min.css') }}">
    <link rel="stylesheet" href="{{ asset('landing/css/magnific-popup.css') }}">
    <link rel="stylesheet" href="{{ asset('landing/css/aos.css') }}">
    <link rel="stylesheet" href="{{ asset('landing/css/ionicons.min.css') }}">
    <link rel="stylesheet" href="{{ asset('landing/css/bootstrap-datepicker.css') }}">
    <link rel="stylesheet" href="{{ asset('landing/css/jquery.timepicker.css') }}">
    <link rel="stylesheet" href="{{ asset('landing/css/flaticon.css') }}">
    <link rel="stylesheet" href="{{ asset('landing/css/icomoon.css') }}">
    <link rel="stylesheet" href="{{ asset('landing/css/style.css') }}">
    <link rel="stylesheet" href="{{ asset('vendor/font-awesome/css/all.css') }}">
    <link rel="stylesheet" href="{{ asset('landing/css/landing_custom.css') }}">
</head>
<body>

    @include('partials.landing.header')
    @yield('content')
@include('partials.landing.footer')
@include('partials.landing.avisodeprivacidad')
@include('partials.landing.terminos')

<!-- loader -->
<div id="ftco-loader" class="show fullscreen"><svg class="circular" width="48px" height="48px"><circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee"/><circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#F96D00"/></svg></div>


<script src="{{ asset('landing/js/jquery.min.js') }}"></script>
<script src="{{ asset('landing/js/jquery-migrate-3.0.1.min.js') }}"></script>
<script src="{{ asset('landing/js/popper.min.js') }}"></script>
<script src="{{ asset('landing/js/bootstrap.min.js') }}"></script>
<script src="{{ asset('landing/js/jquery.easing.1.3.js') }}"></script>
<script src="{{ asset('landing/js/jquery.waypoints.min.js') }}"></script>
<script src="{{ asset('landing/js/jquery.stellar.min.js') }}"></script>
<script src="{{ asset('landing/js/owl.carousel.min.js') }}"></script>
<script src="{{ asset('landing/js/jquery.magnific-popup.min.js') }}"></script>
<script src="{{ asset('landing/js/aos.js') }}"></script>
<script src="{{ asset('landing/js/jquery.animateNumber.min.js') }}"></script>
<script src="{{ asset('landing/js/bootstrap-datepicker.js') }}"></script>
<script src="{{ asset('landing/js/scrollax.min.js') }}"></script>
<script src="{{ asset('landing/js/main.js') }}"></script>

</body>
</html>
