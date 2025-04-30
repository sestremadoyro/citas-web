@extends('layouts.login')

@section('content')

    <div class="brand">
        <img src="{{ asset('images/logo_vertical_white.png') }}" alt="logo">
        <p>Soporte de PostVenta-Consultas Mantenimiento</p>
    </div>
    <div class="">
        <div class="">
            <form method="POST" action="{{ route('login') }}">
                @csrf
                <div class="form-group">
                    <label for="email">Correo electronico</label>
                    <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email"
                        value="{{ old('email') }}" required autocomplete="email" autofocus>

                    @error('email')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>

                <div class="form-group">
                    <label for="password">Contraseña
                    </label>

                    <input id="password" type="password" class="form-control @error('password') is-invalid @enderror"
                        name="password" required autocomplete="current-password" data-eye>

                    @error('password')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror

                </div>

                <div class="form-group">
                    <div class="custom-checkbox custom-control">
                        <input class="custom-control-input" type="checkbox" name="remember" id="remember"
                            {{ old('remember') ? 'checked' : '' }}>
                        <label for="remember" class="custom-control-label">Recuerdame</label>
                    </div>
                </div>

                <div class="">
                    <div class="row d-flex align-items-center">
                        <div class="col-12 col-md-6 pt-2 ">
                            @if (Route::has('password.request'))
                                <div class="text-center text-md-left">
                                    <a href="{{ route('password.request') }}" class="text-white"> ¿Has olvidado tu
                                        contraseña? </a>
                                </div>
                            @endif
                        </div>
                        <div class="col-12 col-md-6 text-right mt-3 mt-md-0">
                            <button type="submit" class="btn btn-white btn-block">
                                Ingresar
                            </button>
                        </div>
                    </div>



                    {{-- @if (Route::has('password.request'))
                <div class="mt-4 text-center">
                    Don't have an account? <a href="{{ route('password.request') }}">Create One</a>
                </div>
                @endif --}}

                </div>
            </form>
        </div>
    </div>

@endsection
