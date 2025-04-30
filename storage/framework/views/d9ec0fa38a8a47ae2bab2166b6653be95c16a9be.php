<?php $__env->startSection('custom-scripts'); ?>
    <script>
        $(function() {
            trackadmin.public.banner_primary({

            })
        })
    </script>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>

    <div class="row mt-5 mt-md-0 d-flex justify-content-between">
        <div class="col-12 mb-4">
            <h5>Banner Principal</h5>
        </div>
        <div class="col-12">
            <div id="mant-message"></div>
        </div>
        <div class="col-12">
            <ul class="nav nav-pills mb-4 justify-content-center" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                    <a class="nav-link active" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab"
                        aria-controls="pills-profile" aria-selected="false">Imágenes</a>
                </li>
            </ul>
        </div>

        <div class="col-12  tab-content" id="pills-tabContent">
            <div class=" tab-pane fade show active" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                <div class="row">

                    <div class="col-12 col-md-7 mt-4 mt-md-0 ">
                        <div class="content-file-img mb-4 d-flex justify-content-end">
                            <button class="btn btn-outline-secondary btn-file btn-sm" img-content="img-1"
                                input-file="fileInputImage"><i class="fas fa-plus"></i> Cargar Imagen</button>
                            <input type="file" class="d-none" id="fileInputImage" lang="es"
                                content-id="<?php echo e($content->id); ?>" accept=".jpg,.png,.jpeg,.svg">
                        </div>
                        <img src="<?php echo e($content->image); ?>" alt="" class="img-fluid shadow "
                            id="img-1">

                        <div class="form-group mt-4">
                            <button class="btn-lg btn btn-outline-secondary" id="btn-save-image"><i
                                    class="far fa-save"></i>
                                Guardar Cambios</button>
                        </div>
                    </div>
                    <div class="col-12 col-md-5">
                        <h5>Recomendaciones:</h5>
                        <ul class="mt-4">
                            <li>El peso máximo permitido es de 2MB. Puedes usar herramientas de compresión para reducir el peso de la imagen.</li><br>
                            <li>Medidas: 1600x500 px.</li><br>
                            <li>El formato de la imagen debe ser jpg, png, jpeg, svg.</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.platform', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/prod/citas-web/resources/views/pages/platform/workshops/banner_primary.blade.php ENDPATH**/ ?>