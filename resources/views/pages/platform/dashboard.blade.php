@extends('layouts.platform')

@section('custom-scripts')
    <script>
        $(function() {
            trackadmin.public.dashboard({

            })
        })
    </script>
@endsection

@section('content')
<div class="container-fluid">
    <div class="row ">
        <div class="col-12 mb-4">
            <div class="card">
                <div class="card-body">
                    <h5>Dashboard</h5>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card">
                <div class="card-header">
                    <button class="btn btn-primary btn-sm float-right ml-1" id="btn-search"><i class="fas fa-search"></i>
                        Buscar</button>
                    <button class="btn btn-primary btn-sm float-right " id="btn-clear-search"><i
                            class="fas fa-eraser"></i> Limpiar</button>
                </div>
                <div class="card-body" id="form_search">
                    <div class="form-group">
                        <label for="input_search_name">Código</label>
                        <input type="text" class="form-control" id="input_search_name" placeholder=""
                            name="search_name">
                    </div>

                    <table class="table table-hover clicked" id="table-result-search">
                    </table>
                    <div class="mt-2" id="table-count"></div>
                </div>
            </div>
        </div>
        <div class="col-md-9 mt-4 mt-md-0">
            <div class="card">
                <div class="card-header text-right">
                    <button class="btn btn-primary btn-sm" id="btn-new"><i class="fas fa-plus"></i> Nuevo</button>
                    <button class="btn btn-primary btn-sm" id="btn-edit"><i class="fas fa-edit"></i> Editar</button>
                    <button class="btn btn-primary btn-sm" id="btn-save"><i class="far fa-save"></i> Guardar</button>
                    <button class="btn btn-primary btn-sm" id="btn-delete"> <i class="far fa-trash-alt"></i>
                        Eliminar</button>
                    <button class="btn btn-primary btn-sm" id="btn-cancel"><i class="fas fa-times"></i>
                        Cancelar</button>
                </div>
                <div class="card-body">
                    <form id="form_maintenance" class="needs-validation" novalidate>
                        <div id="mant-message"></div>
                        <div class="text-right">
                            Creado: <span id="created_at" class=""></span> <br>
                            Actualizado: <span id="updated_at" class=""></span>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="txtCode">Código </label>
                                <div class="input-group mb-3">
                                    <input type="text" id="txtCode" name="code" required class="form-control"
                                        aria-describedby="button-addon2">
                                </div>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="ddlCertifications">Certificación</label>
                                <select id="ddlCertifications" class="form-control defaultSelect2" name="certification_id" required>
                                </select>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="txtIntentMax">Limite de intentos</label>
                                <input class="form-control" type="number" id="txtIntentMax" name="intent_max" required />
                            </div>
                            <div class="form-group col-md-4">
                                <label for="txtIntent">Intentos realizados</label>
                                <input class="form-control" type="number" id="txtIntent" name="intent" required />
                            </div>
                            <div class="form-group col-md-4">
                                <label for="txtDateStart">Fecha de uso</label>
                                <input class="form-control " type="text" id="txtDateStart" name="date_start" required />
                            </div>
                        </div>
                        <div class="form-group" id="message_user_approved">
                            
                        </div>
                        <input type="hidden" id="input_current_id" name="id" class="d-none">
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection