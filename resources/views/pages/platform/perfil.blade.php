@extends('layouts.platform')

@section('custom-scripts')
    <script>
        $(function() {
            trackadmin.public.user({

            })
        })
    </script>
@endsection

@php
$message = session()->get('message');
@endphp

@section('profile')


    <div class="row mt-4 ml-0 ml-md-2 mt-md-0 ">
        <!-- <div id="mant-message"></div> -->
        @isset($message)
            <div class="col-12">
                <div class="container alert alert-success" role="alert">
                    {{ $message }}
                </div>
            </div>
        @endisset

        <div class="col-12  tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <form id="form_maintenance" class="needs-validation" method="POST" action="{{ route('profile.update') }}"
                    validate>
                    <div class="row d-flex justify-content-between">
                        <div class="col-12 col-md-5 mt-4 mt-md-0 ">
                            <h5 class="mb-4">Mi Perfil</h5>
                            <!-- <input type="hidden" value="" name="id"> -->
                            @csrf
                            <div class="form-group">
                                <label for="txtName">Nombres</label>
                                <input type="text" class="form-control" id="txtName" name="name"
                                    value="{{ Auth::user()->name }}" required>
                            </div>
                            <div class="form-group">
                                <label for="txtLastNames">Apellidos</label>
                                <input type="text" class="form-control" id="txtLastNames" name="last_names"
                                    value="{{ Auth::user()->last_names }}">
                            </div>
                            <div class="form-group">
                                <label for="txtEmail">Correo Electronico</label>
                                <input type="email" class="form-control" id="txtEmail" name="email"
                                    value="{{ Auth::user()->email }}" disabled>
                            </div>
                        </div>
                        <div class="col-12 col-md-5">
                            <h5 class="mb-4">Cambiar contraseña</h5>
                            <div class="form-group">
                                <label for="txtNewPassword">Nueva contraseña</label>
                                <input type="password" class="form-control" id="txtNewPassword" name="new_password"
                                    >
                            </div>
                            <div class="form-group">
                                <label for="txtConfirmPassword">Confirmar contraseña</label>
                                <input type="password" class="form-control" id="txtConfirmPassword"
                                    name="confirm_password" >
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-group mt-4">
                                <button type="submit" class="btn-lg btn btn-outline-secondary" id="btn-save"><i
                                        class="far fa-save"></i>
                                    Guardar Cambios</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection
