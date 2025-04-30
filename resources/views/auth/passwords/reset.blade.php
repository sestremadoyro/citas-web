@extends('layouts.login')

@section('content')
    <div class="brand">
        <img src="{{ asset('images/logo_vertical_white.png') }}" alt="logo">
    </div>
    <div class="">
        <div class="">
            <h4 class="card-title">Restablecer la contraseña</h4>
            <form method="POST" action="{{ route('password.update') }}">
                @csrf
                <input type="hidden" name="token" value="{{ $token }}">
                <div class="form-group">
                    <label for="new-password">Nueva contraseña</label>
                    <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email"
                        value="{{ $email ?? old('email') }}" required autocomplete="email" autofocus>

                    @error('email')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror

                </div>

                <div class="form-group">
                    <label for="new-password">Nueva contraseña</label>
                    <input id="password" type="password" class="form-control @error('password') is-invalid @enderror"
                        name="password" required autocomplete="new-password">

                    @error('password')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror

                </div>

                <div class="form-group">
                    <label for="new-password">Confirmar contraseña</label>
                    <input id="password-confirm" type="password" class="form-control" name="password_confirmation"
                        required autocomplete="new-password">
                </div>

                <div class="form-text text-muted">
                    Asegúrese de que su contraseña sea segura y fácil de recordar
                </div>
        </div>

        <div class="form-group m-0">
            <button type="submit" class="btn btn-primary btn-block">
                Restablecer la contraseña
            </button>
        </div>
        </form>
    </div>
@endsection
