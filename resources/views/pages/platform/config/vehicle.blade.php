@extends('layouts.platform')

@section('custom-scripts')
    <script>
        $(function() {
            trackadmin.public.vehicle({
               
            })
        })
    </script>
@endsection

@section('content')
    <div class="tab-pane fade show " id="config-vehicles" role="tabpanel" aria-labelledby="config-vehicles-tab">
        <div class="row ">
            <div class="col-6 mb-4">
                <h5 class="">Vehículos</h5>
            </div>

            <div class="col-6 text-right">
                <button type="button" class="btn  btn-outline-secondary btn-light btn-sm" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-upload"></i> Cargar Vehículos
                </button>
                <div class="dropdown-menu">
                    <button class="dropdown-item" id="btn-import-exams"><i class="fas fa-file-excel"></i>
                        Importar</button>
                    <a class="dropdown-item" href="{{ route('template_vehicles.export') }}">
                        <i class="fas fa-table"></i> Descargar Template</a>
                </div>
                <form id="examsImport" action="{{ route('vehicles.import') }}" method="POST" enctype="multipart/form-data"
                    class="d-none">
                    {{ csrf_field() }}
                    <div class="custom-file">
                        <input type="file" id="file-import" name="file"
                            accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel">
                    </div>
                </form>
                <button id="btn-modal-vehicle" class="btn btn-outline-secondary btn-file btn-sm" data-toggle="modal"
                    data-target="#modal-vehicle">
                    <i class="fas fa-plus"></i> Nuevo</button>

                <button id="btn-delete-all" class="btn btn-outline-danger btn-file btn-sm">
                    <i class="fas fa-trash"></i> Eliminar todo</button>
            </div>
            <div class="col-12 mt-2">
                <div class="form-group">
                    <table id="table-result-search" class="table table-striped table-custom responsive ">
                    </table>
                    {{-- <input type="file" class="form-control" id="fileImageBanners" name="files[]" multiple
                                        accept=".jpg,.png,.jpeg,.svg" /> --}}
                </div>
            </div>
        </div>
    </div>
    {{-- </div> --}}

    <!---------------------------------------------- MODAL ADD VEHICULOS -------------------------------------------------------->

    <div class="modal fade" id="modal-vehicle" tabindex="-1" aria-labelledby="modal-vehicle" aria-hidden="true"
        data-backdrop="static" data-keyboard="false">
        <div class="modal-dialog modal-xl modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header bg-dark">
                    <h5 class="modal-title text-white" id="modal-vehicle-label"></h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form id="form-add-vehicle" class="needs-validation">
                        <div class="form-row">
                            <div class="col-12 col-md-5">
                                <div class="form-group col-12">
                                    <label for="" class="col-form-label">Modelo</label>
                                    <input type="text" name="model" class="form-control" id="txtModel" required>
                                </div>
                                <div class="form-group col-12">
                                    <label for="fileVehicle" class="col-form-label">Subir imagen</label>
                                    <input id="fileVehicle" name="files[]" multiple type="file" class="form-control"
                                        accept=".jpg,.png,.jpeg,.svg" required>
                                </div>
                            </div>

                            <div class="col-12 col-md-7 ">
                                <div class="row mt-2 mb-4">
                                    <div class="col-9 ">
                                        <h5 class="">Detalles</h5>
                                    </div>
                                    <div class="col-3 text-right">
                                        <button type="button" id="btn-modal-add-detail"
                                            class="btn btn-outline-secondary btn-file btn-sm">
                                            <i class="fas fa-plus"></i> Agregar</button>
                                    </div>
                                </div>
                                <div class="table-scrollable">
                                    <table class="table " id="table-details">
                                        <thead>
                                            <tr>
                                                <!--  <th scope="col">#</th> -->
                                                <th scope="col">Versión</th>
                                                <th scope="col">Año de entrega</th>
                                                <th scope="col">Kilometraje</th>
                                                <th scope="col">Opt</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {{-- <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>5000</td>
                                        <td>2022</td>
                                      </tr>
                                      <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>5000</td>
                                        <td>2022</td>
                                      </tr>
                                      <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>5000</td>
                                        <td>2022</td>
                                      </tr>

                                      <tr>
                                        <th scope="row">4</th>
                                        <td><input type="text" class="form-control" id="exampleInputEmail1"></td>
                                        <td><input type="text" class="form-control" id="exampleInputEmail1"></td>
                                        <td><input type="text" class="form-control" id="exampleInputEmail1"></td>
                                      </tr> --}}
                                        </tbody>
                                    </table>
                                </div>
                            </div>


                            <input type="hidden" name="id" id="vehicle_id" class="d-none">
                        </div>

                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary btn-file" id="btn-vehicle-save">Guardar
                        Cambios</button>
                    <button type="button" class="btn btn-outline-secondary btn-file" data-dismiss="modal">Cancelar</button>
                </div>
            </div>
        </div>
    </div>

    <!---------------------------------------------- MODAL EDIT VEHICULOS -------------------------------------------------------->

    {{-- <div class="modal fade" id="modal-edit-vehicle" data-keyboard="true" tabindex="-1"
        aria-labelledby="modal-edit-vehicle" aria-hidden="true">
        <div class="modal-dialog modal-xl modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header bg-dark text-white">
                    <h5 class="modal-title" id="modal-edit-vehicle-label">Editar Vehiculo</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form id="form-add-edit-vehicle" class="needs-validation">
                        <div class="form-row">
                            <div class="col-12 col-md-3">
                                <div class="form-group col-12">
                                    <label for="" class="col-form-label">Modelo</label>
                                    <input type="text" name="model" class="form-control" id="m_txtModel" required>
                                </div>
                                <div class="form-group col-12">
                                    <label for="" class="col-form-label">Version</label>
                                    <input type="text" name="version" class="form-control" id="m_txtVersion">
                                </div>
                                <div class="form-group col-12">
                                    <label for="" class="col-form-label">Año de Entrega</label>
                                    <input type="text" name="delivery_year" class="form-control" id="m_txtDelivery_year"
                                        required>
                                </div>
                                <div class="form-group col-12">
                                    <label for="" class="col-form-label">Kilometraje</label>
                                    <input type="text" name="mileage" class="form-control" id="m_txtMileage">
                                </div>
                            </div>
                            <div class="col-12 col-md-9">
                                <div class="form-group col-12">
                                    <label for="fileEditVehicles" class="col-form-label">Editar imagen</label>
                                    <input id="fileEditVehicles" name="files[]" multiple type="file" class="form-control"
                                        accept=".jpg,.png,.jpeg,.svg">
                                </div>
                            </div>

                            <input type="hidden" name="id" id="m_vehicle_id" class="d-none">
                        </div>

                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary btn-file" id="edit-vehicle">Guardar
                        Cambios</button>
                    <button type="button" class="btn btn-outline-secondary btn-file" data-dismiss="modal">Cancelar</button>
                </div>
            </div>
        </div>
    </div> --}}
@endsection
