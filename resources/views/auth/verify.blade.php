@extends('layouts.app')

@section('content')
    <div class="brand">
        <img src="img/logo.jpg" alt="bootstrap 4 login page">
    </div>
    <div class="">
        <div class="">
            <h4 class="card-title">Verifique su dirección de correo electrónico</h4>

            @if (session('resent'))
                <div class="alert alert-success" role="alert">
                    Se ha enviado un nuevo enlace de verificación a su dirección de correo electrónico.
                </div>
            @endif
            <div class="form-group m-0">
                {{ __('Before proceeding, please check your email for a verification link.') }}
                {{ __('If you did not receive the email') }},

            </div>
            <div class="form-group m-0">
                <form class="d-inline" method="POST" action="{{ route('verification.resend') }}">
                    @csrf
                    <button type="submit" class="btn btn-primary btn-block">
                        Haga clic aquí para solicitar otro
                    </button>
                </form>
            </div>

        </div>
    </div>
@endsection
