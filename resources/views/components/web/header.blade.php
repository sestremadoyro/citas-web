@php
$controller = new \App\Http\Controllers\Controller(request());
$detail = $controller->getDetail();
@endphp
<div class="bg-white znav-white znav-container sticky-top navbar-elixir header" id="znav-container">
    <nav class="navbar navbar-light bg-dark justify-content-end pt-1 pb-0"
        style="border-bottom: 2px solid #dedede; border-radius: 0px;">
        <ul class="navbar-nav fs-0 cf">
            <li class="margin-list-header"><a class="d-block text-white text-ligth" href="{{ route('talleres') }}">Contacto</a>
            </li>
        </ul>
    </nav>

    <div class="container-fluid cf">
        <nav class="navbar navbar-expand-lg">
            <a class="navbar-brand overflow-hidden pr-3 margin-logo" href="{{ url('/') }}"><img
                    class="img-fluid" src="{{ asset('images/seat-s-logo.svg') }}" alt="" /></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <div class="hamburger hamburger--emphatic">
                    <div class="hamburger-box">
                        <div class="hamburger-inner"></div>
                    </div>
                </div>
            </button>
            <div class="navbar-collapse collapse justify-content-left justify-content-lg-center align-items-left align-items-lg-center"
                id="navbarNavDropdown">

                <ul class="navbar-nav fs-0 align-items-left lign-items-lg-center">
                    <li class="margin-list-header">
                        <a class="d-block text-dark" href="{{ route('beneficios') }}">Beneficios</a>
                    </li>
                    <li class="margin-list-header">
                        <a class="d-block text-dark" href="{{ route('talleres') }}">Talleres</a>
                    </li>
                    <li class="margin-list-header">
                        <a class="d-block text-dark" href="{{ route('consultas') }}">Consultas Mantenimiento</a>
                    </li>

                    {{--  --}}

                    <a href="{{ $detail->link_cita }}" class="btn btn-outline-primary btn-md  d-block d-lg-none mt-3 button-header"
                        target="_blank">Agenda tu cita</a>
                </ul>
            </div>
            <a href="{{ $detail->link_cita }}" class="btn btn-outline-primary btn-md d-none d-lg-block button-header"
                target="_blank">Agenda tu cita</a>
            {{-- <div class="collapse navbar-collapse d-flex justify-content-center align-items-center">
                <ul class="navbar-nav">
                    <li class="margin-button-header">
                        <a href="{{ $detail->link_cita }}" class="btn btn-outline-primary btn-md button text-white"
                            target="_blank">Agenda tu Cita</a>
                    </li>
                </ul>     
            </div> --}}

        </nav>
    </div>
</div>
