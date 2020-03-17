<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>App Landing Template </title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" type="image/x-icon" href="{{ asset('landing/img/favicon.ico')}}">

    <!-- CSS here -->
    <link rel="stylesheet" href="{{ asset('landing/css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('landing/css/owl.carousel.min.css') }}">
    <link rel="stylesheet" href="{{ asset('landing/css/flaticon.css') }}">
    <link rel="stylesheet" href="{{ asset('landing/css/slicknav.css') }}">
    <link rel="stylesheet" href="{{ asset('landing/css/animate.min.css') }}">
    <link rel="stylesheet" href="{{ asset('landing/css/magnific-popup.css') }}">
    <link rel="stylesheet" href="{{ asset('landing/css/fontawesome-all.min.css') }}">
    <link rel="stylesheet" href="{{ asset('landing/css/themify-icons.css') }}">
    <link rel="stylesheet" href="{{ asset('landing/css/slick.css') }}">
    <link rel="stylesheet" href="{{ asset('landing/css/nice-select.css') }}">
    <link rel="stylesheet" href="{{ asset('landing/css/style.css') }}">
    <link rel="stylesheet" href="{{ asset('landing/css/style2.css') }}">
    <link rel="stylesheet" href="{{ asset('landing/css/landing_custom.css') }}">
</head>

<body>

    <!-- Preloader Start -->
    <div id="preloader-active">
        <div class="preloader d-flex align-items-center justify-content-center">
            <div class="preloader-inner position-relative">
                <div class="preloader-circle"></div>
                <div class="preloader-img pere-text">
                    <img src="{{ asset('landing/img/logo/logo.png')}}" alt="">
                </div>
            </div>
        </div>
    </div>
    <!-- Preloader Start -->

    <header>
        <!-- Header Start -->
        <div class="header-area header-transparrent ">
            <div class="main-header header-sticky">
                <div class="container">
                    <div class="row align-items-center">
                        <!-- Logo -->
                        <div class="col-xl-2 col-lg-2 col-md-2">
                            <div class="logo">
                                <a href="index.html"><img src="{{ asset('landing/img/logo/logo.png')}}" alt=""></a>
                            </div>
                        </div>
                        <div class="col-xl-10 col-lg-10 col-md-10">
                            <!-- Main-menu -->
                            <div class="main-menu f-right d-none d-lg-block">
                                <nav>
                                    <ul id="navigation">
                                        <li class="active"><a href="index.html"> Home</a></li>
                                        <li><a href="feature.html">Feature</a></li>
                                        <li><a href="services.html">Services</a></li>
                                        <li><a href="pricing.html">Pricing</a></li>
                                        <li><a href="#">Pages</a>
                                            <ul class="submenu">
                                                <li><a href="blog.html">Blog</a></li>
                                                <li><a href="single-blog.html">Blog Details</a></li>
                                                <li><a href="elements.html">Element</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <!-- Mobile Menu -->
                        <div class="col-12">
                            <div class="mobile_menu d-block d-lg-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Header End -->
    </header>

@yield('content')
    <footer>

     <!-- Footer Start-->
     <div class="footer-main">
        <div class="footer-area footer-padding">
            <div class="container">
                <div class="row  justify-content-between">
                    <div class="col-lg-3 col-md-4 col-sm-8">
                       <div class="single-footer-caption mb-30">
                          <!-- logo -->
                          <div class="footer-logo">
                           <a href="index.html"><img src="{{ asset('landing/img/logo/logo2_footer.png')}}" alt=""></a>
                       </div>
                       <div class="footer-tittle">
                           <div class="footer-pera">
                               <p class="info1">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore.</p>
                           </div>
                       </div>
                   </div>
               </div>
               <div class="col-lg-2 col-md-4 col-sm-5">
                <div class="single-footer-caption mb-50">
                    <div class="footer-tittle">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Download</a></li>
                            <li><a href="#">Reviews</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-lg-2 col-md-4 col-sm-7">
                <div class="single-footer-caption mb-50">
                    <div class="footer-tittle">
                        <h4>Support</h4>
                        <ul>
                            <li><a href="#">Report a bug</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Sitemap</a></li>
                            <li><a href="#">FAQs</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-8">
                <div class="single-footer-caption mb-50">
                    <div class="footer-tittle">
                        <h4>Newsletter</h4>
                        <div class="footer-pera footer-pera2">
                           <p>Heaven fruitful doesn't over lesser in days. Appear </p>
                       </div>
                       <!-- Form -->
                       <div class="footer-form">
                           <div id="mc_embed_signup">
                               <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01" method="get" class="subscribe_form relative mail_part" novalidate="true">
                                   <input type="email" name="EMAIL" id="newsletter-form-email" placeholder=" Email Address " class="placeholder hide-on-focus" onfocus="this.placeholder = ''" onblur="this.placeholder = ' Email Address '">
                                   <div class="form-icon">
                                       <button type="submit" name="submit" id="newsletter-submit" class="email_icon newsletter-submit button-contactForm"><img src="{{ asset('landing/img/shape/form_icon.png')}}" alt=""></button>
                                   </div>
                                   <div class="mt-10 info"></div>
                               </form>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
       <!-- Copy-Right -->
       <div class="row align-items-center">
        <div class="col-xl-12 ">
            <div class="footer-copy-right">
             <p><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
              Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="ti-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
              <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p>
          </div>
      </div>
  </div>
</div>
</div>
</div>
<!-- Footer End-->

</footer>

<!-- JS here -->

<!-- All JS Custom Plugins Link Here here -->
<script src="{{ asset('landing/js/vendor/modernizr-3.5.0.min.js') }}"></script>

<!-- Jquery, Popper, Bootstrap -->
<script src="{{ asset('landing/js/vendor/jquery-1.12.4.min.js') }}"></script>
<script src="{{ asset('landing/js/popper.min.js') }}"></script>
<script src="{{ asset('landing/js/bootstrap.min.js') }}"></script>
<!-- Jquery Mobile Menu -->
<script src="{{ asset('landing/js/jquery.slicknav.min.js') }}"></script>

<!-- Jquery Slick , Owl-Carousel Plugins -->
<script src="{{ asset('landing/js/owl.carousel.min.js') }}"></script>
<script src="{{ asset('landing/js/slick.min.js') }}"></script>
<!-- Date Picker -->
<script src="{{ asset('landing/js/gijgo.min.js') }}"></script>
<!-- One Page, Animated-HeadLin -->
<script src="{{ asset('landing/js/wow.min.js') }}"></script>
<script src="{{ asset('landing/js/animated.headline.js') }}"></script>
<script src="{{ asset('landing/js/jquery.magnific-popup.js') }}"></script>

<!-- Scrollup, nice-select, sticky -->
<script src="{{ asset('landing/js/jquery.scrollUp.min.js')}}"></script>
<script src="{{ asset('landing/js/jquery.nice-select.min.js')}}"></script>
<script src="{{ asset('landing/js/jquery.sticky.js')}}"></script>

<!-- contact js -->
<script src="{{ asset('landing/js/contact.js')}}"></script>
<script src="{{ asset('landing/js/jquery.form.js')}}"></script>
<script src="{{ asset('landing/js/jquery.validate.min.js')}}"></script>
<script src="{{ asset('landing/js/mail-script.js')}}"></script>
<script src="{{ asset('landing/js/jquery.ajaxchimp.min.js')}}"></script>

<!-- Jquery Plugins, main Jquery -->
<script src="{{ asset('landing/js/plugins.js')}}"></script>
<script src="{{ asset('landing/js/main.js')}}"></script>
<script src="{{ asset('js/particles.min.js')}}"></script>
{{--<script src="{{ asset('js/nasa_particles.js')}}"></script>--}}
<script src="{{ asset('js/default_particles.js')}}"></script>
<script >

</script>
</body>
</html>
