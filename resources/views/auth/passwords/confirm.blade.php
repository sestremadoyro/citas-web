@extends('layouts.login')

@section('content')
    <div class="brand">
        <img src="{{ asset('images/logo_vertical_white.png') }}" alt="logo">
    </div>
    <div class="">
        <div class="">
            <h4 class="card-title">Confirmar contraseña</h4>
            <p class="pt-2 pb-2">Confirma tu contraseña antes de continuar</p>
            <form method="POST" action="{{ route('password.confirm') }}">
                @csrf
                <div class="form-group">
                    <label for="new-password">Contraseña</label>
                    <input id="password" type="password" class="form-control @error('password') is-invalid @enderror"
                        autofocus data-eye name="password" required autocomplete="current-password">
                    @error('password')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
                <div class="form-group m-0">
                    <button type="submit" class="btn btn-primary btn-block">
                        Confirmar contraseña
                    </button>
                    @if (Route::has('password.request'))
                        <div class="mt-4 text-center">
                            ¿Has olvidado tu contraseña? <a href="{{ route('password.request') }}">Click Aqui</a>
                        </div>
                    @endif
                </div>
            </form>
        </div>
    </div>
@endsection
