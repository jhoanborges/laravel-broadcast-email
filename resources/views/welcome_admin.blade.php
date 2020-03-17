<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Commerce Senter</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="robots" content="all,follow">
    <!-- Google fonts - Poppins -->
    <link rel="stylesheet" href="{{url('css/google-font.css')}}">

    <!-- Favicon-->
    <link rel="shortcut icon" href="{{asset('img/favicon.ico')}}">
    <link rel="stylesheet" href="{{asset('css/all.css')}}">
    <link rel="stylesheet" href="{{asset('css/app.css')}}">


    <link rel="stylesheet"  id="theme-stylesheet" href="{{url('css/dataTables.bootstrap4.min.css')}}">
    <link rel="stylesheet" href="{{url('css/select2.min.css')}}">
    <link rel="stylesheet" href="{{url('css/toastr.min.css')}}">


    <link rel="stylesheet" href="{{asset('css/custom.css')}}">


    @yield('extra-css')
    <!-- Tweaks for older IEs--><!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script><![endif]-->
    </head>
    <body>
        <div class="page">
            @include('partials.admin.navbar')
            <div class="page-content d-flex align-items-stretch">
                @include('partials.admin.sidebar')
                <div class="content-inner">
                    @include('partials.admin.breadcrumb')
                    @yield('content')
                </div>
            </div>
        </div>
        <!-- JavaScript files-->


        <script src="{{asset('js/app.js')}}"></script>
        <script src="{{asset('js/all.js')}}"></script>
            <script src="{{url('js/jquery.dataTables.min.js')}}"></script>
            <script src="{{url('js/dataTables.bootstrap4.min.js')}}"></script>

    <script src="{{url('js/loadingoverlay.min.js')}}"></script>

            <script src="{{url('js/select2.min.js')}}"></script>
    <script src="{{url('js/toastr.min.js')}}"></script>

    <!--datatables buttons and print-->
    <script src="{{url('js/dataTables.buttons.min.js')}}"></script>
    <script src="{{url('js/buttons.flash.min.js')}}"></script>
    <script src="{{url('js/jszip.min.js')}}"></script>
    <script src="{{url('js/pdfmake.min.js')}}"></script>
    <script src="{{url('js/vfs_fonts.js')}}"></script>
    <script src="{{url('js/buttons.html5.min.js')}}"></script>
    <script src="{{url('js/buttons.print.min.js')}}"></script>
    <script src="{{url('js/sweetalert2@9.js')}}"></script>


        @yield('extra-js')
    </body>
    </html>
