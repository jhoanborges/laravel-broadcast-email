      <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light" id="ftco-navbar">
        <div class="container">
          <a class="navbar-brand" href="{{ route('home') }}">
            <img src="{{ asset('img/logo-white-full.png') }}" class="img-fluid navbar-img" width="100">
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="oi oi-menu"></span> Menu
          </button>

          <div class="collapse navbar-collapse" id="ftco-nav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active"><a href="{{ route('home') }}" class="nav-link">Home</a></li>
              <li class="nav-item"><a href="about.html" class="nav-link">About</a></li>
              <li class="nav-item"><a href="domain.html" class="nav-link">Domain</a></li>
              <li class="nav-item"><a class="nav-link" href="hosting.html">Hosting</a></li>
              <li class="nav-item"><a href="blog.html" class="nav-link">Blog</a></li>
              <li class="nav-item"><a href="contact.html" class="nav-link">Contact</a></li>
              <li class="nav-item cta"><a href="{{env('COMMERCE_URL')}}" target="_blank"  class="nav-link text-center pmd-btn-raised pmd-ripple-effect">¡Cotiza ya!</a></li>
            </ul>
          </div>
        </div>
      </nav>
    <!-- END nav -->
