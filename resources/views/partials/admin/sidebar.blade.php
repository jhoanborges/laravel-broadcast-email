      <!-- Side Navbar -->
      <nav class="side-navbar">
          <!-- Sidebar Header-->
          <div class="sidebar-header d-flex align-items-center">
            <div class="avatar"><img src="{{ asset('admin_assets/img/avatar-1.jpg')}}" alt="..." class="img-fluid rounded-circle"></div>
            @if(Auth::check() )
            <div class="title">
              <h1 class="h4">{{Auth::user()->name}} {{Auth::user()->lastname}}</h1>
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
                <i class="fas fa-home"></i>
                Inicio
            </a>
        </li>
        <li class="{{Route::currentRouteNamed('clients.index') ? 'active' : '' }}">
            <a href="{{route('clients.index')}}">
                <i class="fas fa-users"></i>
                Clientes
            </a>
        </li>

        </ul>

    </nav>
