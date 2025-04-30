@extends('layouts.login')

@section('content')
    <div class="brand">
        <img src="{{ asset('images/logo_vertical_white.png') }}" alt="logo">
    </div>
    <div class="">
        <div class="">
            <h4 class="card-title">Has olvidado tu contraseña</h4>
            @if (session('status'))
                <div class="alert alert-success" role="alert">
                    {{ session('status') }}
                </div>
            @endif
            <form method="POST" action="{{ route('password.email') }}">
                @csrf

                <div class="form-group">
                    <label for="email">E-Mail</label>
                    <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email"
                        value="{{ old('email') }}" required autocomplete="email" autofocus>

                    @error('email')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                    <div class="form-text text-muted">
                        Al hacer clic en "Restablecer contraseña", le enviaremos un enlace para restablecer la contraseña.
                    </div>
                </div>

                <div class="form-group m-0">
                    <button type="submit" class="btn btn-primary btn-block">
                        Restablecer contraseña
                    </button>
                </div>
            </form>
        </div>
    </div>


@endsection
