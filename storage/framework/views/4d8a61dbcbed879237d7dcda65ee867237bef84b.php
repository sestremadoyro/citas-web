<?php $__env->startSection('custom-scripts'); ?>
    <script>
        $(function() {
            trackadmin.public.vehicle({
               
            })
        })
    </script>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
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
                    <a class="dropdown-item" href="<?php echo e(route('template_vehicles.export')); ?>">
                        <i class="fas fa-table"></i> Descargar Template</a>
                </div>
                <form id="examsImport" action="<?php echo e(route('vehicles.import')); ?>" method="POST" enctype="multipart/form-data"
                    class="d-none">
                    <?php echo e(csrf_field()); ?>

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
                    
                </div>
            </div>
        </div>
    </div>
    

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

    
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.platform', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/prod/citas-web/resources/views/pages/platform/config/vehicle.blade.php ENDPATH**/ ?>