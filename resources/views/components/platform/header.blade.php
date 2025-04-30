<nav class="navbar navbar-expand-lg navbar-light bg-dark text-white">
    <div class="container">
        <a href="{{url("/")}}">
            <img src="{{ asset('images/logo_white.png')}}" alt="" width="140px">
        </a>
        {{-- <button type="button" id="sidebarCollapse" class="btn btn-outline-secondary">
            <i class="fas fa-align-left"></i>
            <span>Menu</span>
        </button>--}}
        <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fas fa-align-justify"></i>
        </button> 

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="nav ml-auto">
                <li class="nav-item">
                    <a id="navbarDropdown" class="nav-link" href="{{ route('profile.index') }}" role="button" >
                        <i class="far fa-user"></i> {{ Auth::user()->name }}
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" role="button" href="{{ route('logout') }}"
                           onclick="event.preventDefault();
                                         document.getElementById('logout-form').submit();">
                            {{ __('Cerrar Sesión') }} <i class="fas fa-sign-in-alt"></i>
                        </a>

                        <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                            @csrf
                        </form>
                </li>
            </ul>
        </div>
    </div>
</nav>

<!--  -->
<div class=" pt-2 pb-2 mb-5 border-bottom nav-menu">
<div class="container">
<ul class="nav ">
    <li class="nav-item">
      <a class="nav-link active" href="{{route('banner_primary.home')}}">Inicio</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="{{route('banner_primary.benefices')}}">Beneficios</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="{{route('banner_primary.workshops')}}">Talleres</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="{{route('detail.config')}}">Configuracion</a>
      </li>
  </ul>
</div>
</div>