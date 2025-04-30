<?php $__env->startSection('custom-scripts'); ?>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
    <script
        src="https://maps.googleapis.com/maps/api/js?key=<?php echo e($detail->google_maps_key); ?>&libraries=places&v=weekly&channel=2"
        async>
    </script>
    <script>
         $(document).ready(function() {
        setTimeout(() => {
            $(function() {
                trackadmin.public.workshops({})
            })
        }, 200);
    })
    </script>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('custom-styles'); ?>
    <style>
        #map {
            height: 400px;
        }

        .controls {
            background-color: #fff;
            border-radius: 2px;
            border: 1px solid transparent;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
            box-sizing: border-box;
            font-family: Roboto;
            font-size: 15px;
            font-weight: 300;
            height: 29px;
            margin-left: 17px;
            margin-top: 10px;
            outline: none;
            padding: 0 11px 0 13px;
            text-overflow: ellipsis;
            width: 400px;
        }

        .controls:focus {
            border-color: #4d90fe;
        }

        .title {
            font-weight: bold;
        }

        #infowindow-content {
            display: none;
        }

        #map #infowindow-content {
            display: inline;
        }
        
        .pac-container{
            z-index: 1200!important;
        }
    </style>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <div class="row mt-5 mt-md-0 d-flex justify-content-between">
        <div class="col-12 mb-4">
            <h5>Talleres</h5>
        </div>
        <div class="col-12">
            <div id="mant-message"></div>
        </div>
        <div class="col-12">
            <ul class="nav nav-pills mb-4 justify-content-center" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                    <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                        aria-controls="pills-home" aria-selected="true">Textos</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab"
                        aria-controls="pills-profile" aria-selected="false">Imágenes</a>
                </li>
            </ul>
        </div>
        <div class="col-12  tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <div class="row">
                    <div class="col-12 col-md-7 mt-4 mt-md-0 list">
                        <form id="form_maintenance" class="needs-validation" novalidate>
                            <?php $__currentLoopData = $workshop; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                <div class="content" id="content_<?php echo e($item->id); ?>">
                                    <input type="hidden" class="txtId" value="<?php echo e($item->id); ?>" name="id">

                                    <input type="hidden" class="txtLat" value="<?php echo e($item->lat); ?>" name="lat">
                                    <input type="hidden" class="txtLng" value="<?php echo e($item->lng); ?>" name="lng">

                                    <div class="form-group  mt-5">
                                        <div class="row">
                                            <div class="col-6">
                                                <h5>Taller <?php echo e($key + 1); ?></h5>
                                            </div>
                                            <div class="col-6 text-right">
                                                <button class="btn btn-danger btn-delete" type="button"
                                                    itemId='<?php echo e($item->id); ?>'><i class="fas fa-trash-alt"></i></button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="name">Nombre del Taller</label>
                                        <input type="text" class="form-control txtName" name="name"
                                            value="<?php echo e($item->name); ?>" required >
                                    </div>
                                    <div class="form-group">
                                        <label for="description">Descripción</label>
                                        <textarea class="form-control txtDescription" name="description" rows="7"
                                            required><?php echo e($item->description); ?></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label for="departament">Departamento</label>
                                        <input type="text" class="form-control txtDepartament" name="departament"
                                            value="<?php echo e($item->departament); ?>" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="phone">Telefono</label>
                                        <input type="text" class="form-control txtPhone" name="phone"
                                        placeholder="Ejemplo +51 987654321" value="<?php echo e($item->phone); ?>" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="link_cita">Enlace de Cita</label>
                                        <input type="text" class="form-control txtLink_cita" name="link_cita"
                                            value="<?php echo e($item->link_cita); ?>" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="map_link">Insertar Ubicación</label>
                                        <div class="input-group mb-3">
                                            <input type="text" class="form-control txtMap_link"
                                                value="<?php echo e($item->map_link); ?>" id="txtDirection_<?php echo e($item->id); ?>"
                                                aria-describedby="btn-modal-map-<?php echo e($item->id); ?>" readonly
                                                name="direction<?php echo e($item->id); ?>" required>
                                            <div class="input-group-append">
                                                <button class="btn btn-outline-secondary btn-open-map"
                                                    item_id="<?php echo e($item->id); ?>" type="button"
                                                    content="txtDirection_<?php echo e($item->id); ?>" lng=""
                                                    lat="<?php echo e($item->lat); ?>" name="map_link"
                                                    id="btn-modal-map-<?php echo e($item->id); ?>"><i
                                                        class="fas fa-map-marker-alt"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                        </form>

                        <div class="form-group">
                            <button type="button" class="btn btn-outline-dark mt-4 mb-4" id="add-workshop"><i
                                    class="fas fa-plus"></i> Agregar Taller</button>
                        </div>

                        <div class="form-group mt-4">
                            <button class="btn-lg btn btn-outline-secondary" id="btn-save"><i class="far fa-save"></i>
                                Guardar Cambios</button>
                        </div>
                    </div>
                    <div class="col-12 col-md-5">
                        <div class="custom-card">
                            <h5>Recomendaciones:</h5>
                            <ul class="mt-4">
                                <li>Bienvenido a la administración de talleres, por favor ingresa los datos necesarios para
                                    su respectiva gestión.</li><br>
                                <li>Recuerda que los textos con (<span style="color:red">*</span>) indican que los campos
                                    son obligatorios.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class=" tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                <div class="row">

                    <div class="col-12 col-md-7 mt-4 mt-md-0 content-images">
                        <!--  -->
                        <?php $__currentLoopData = $workshop; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                            <div class="item-image mt-4">
                                <div class="content-file-img mb-4 d-flex justify-content-between align-items-center">
                                    <h5><?php echo e($item->name); ?></h5>
                                    <button class="btn btn-outline-secondary btn-file btn-sm"
                                        img-content="img-<?php echo e($item->id); ?>"
                                        input-file="fileInputImage_<?php echo e($item->id); ?>">
                                        <i class="fas fa-plus"></i> Cargar Imagen
                                    </button>
                                    <input type="file" class="d-none input-file" id="fileInputImage_<?php echo e($item->id); ?>"
                                        lang="es" item_id="<?php echo e($item->id); ?>" accept=".jpg,.png,.jpeg,.svg">
                                </div>
                                <div class="pl-5 pr-5">
                                    <img src="<?php echo e($item->image); ?>" alt="" class="img-fluid shadow "
                                        id="img-<?php echo e($item->id); ?>">
                                </div>

                            </div>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                        <!--  -->
                        <div class="form-group mt-4">
                            <button class="btn-lg btn btn-outline-secondary" id="btn-save-image"><i
                                    class="far fa-save"></i>
                                Guardar Cambios</button>
                        </div>
                    </div>
                    <div class="col-12 col-md-5">
                        <h5>Recomendaciones:</h5>
                        <ul class="mt-4">
                            <li>El peso máximo permitido es de 2MB. Puedes usar herramientas de compresión para reducir el
                                peso de la imagen.</li><br>
                                <li>Medidas para desktop y tablet : de 810px de ancho y 600px de alto. </li><br>
                             
                            <li>El formato de la imagen debe ser jpg, png, jpeg, svg.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="modalMap" data-backdrop="static" data-keyboard="false" tabindex="-1"
        aria-labelledby="modalMapLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalMapLabel">Crear/Editar dirección</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div id="mant-message-map"></div>
                    <div class="form-group">
                        <label for="description">Ubicación</label>
                        <input id="pac-input" class="form-control" type="text" placeholder="Buscar la dirección" />
                    </div>

                    <div id="map"></div>
                    
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" id="btn-map-save">Guardar</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                </div>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.platform', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/prod/citas-web/resources/views/pages/platform/workshops/workshop.blade.php ENDPATH**/ ?>