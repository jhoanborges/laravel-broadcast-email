      <!-- Side Navbar -->
      <nav class="side-navbar">
          <!-- Sidebar Header-->
          <div class="sidebar-header d-flex align-items-center">
            <div class="avatar"><img src="{{ asset('admin_assets/img/avatar-1.jpg')}}" alt="..." class="img-fluid rounded-circle"></div>
            @if(Auth::check() )
            <div class="title">
              <h1 class="h4">{{Auth::user()->name}} {{Auth::user()->apellidos}}</h1>
              @if( Auth::user()->hasRole('admin') )
              <p>Adminsitrador</p>
              @else
              <p>Ejecutivo</p>
              @endif
          </div>
          @endif

      </div>
      <!-- Sidebar Navidation Menus--><span class="heading">Main</span>
      <ul class="list-unstyled">
        <li class="{{Route::currentRouteNamed('admin.index') ? 'active' : '' }}">
            <a href="{{route('admin.index')}}">
                <i class="icon-home mr-3"></i>
                Home
            </a>
        </li>

        <ul class="list-unstyled">
            <li class="{{Route::currentRouteNamed('users.index') ? 'active' : '' }}">
                <a href="{{route('users.index')}}">
                    <i class="icon-home mr-3"></i>
                    Home
                </a>
            </li>





        </nav>
