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
            <h5>Banner principal</h5>
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
                    <div class="col-12 col-md-7 mt-4 mt-md-0 ">
                        <form id="form_maintenance" class="needs-validation" novalidate>
                            <input type="hidden" value="<?php echo e($content->id); ?>" name="id">
                            <div class="form-group">
                                <label for="txtPrincipal">Texto principal</label>
                                <input type="text" class="form-control" id="txtPrincipal" name="text_primary"
                                    value="<?php echo e($content->text_primary); ?>">
                            </div>

                            <div class="form-group">
                                <label for="txtSecondary">Texto secundario</label>
                                <input type="text" class="form-control" id="txtSecondary" name="text_secondary"
                                    value="<?php echo e($content->text_secondary); ?>">
                            </div>
                            <div class="form-group">
                                <label for="txtButton1">Boton 1</label>
                                <input type="text" class="form-control" id="txtButton1" name="btn_1"
                                    value="<?php echo e($content->btn_1); ?>">
                            </div>
                            <div class="form-group">
                                <label for="txtLinkButton1">Link boton 1</label>
                                <input type="text" class="form-control" id="txtLinkButton1" name="link_btn_1"
                                    value="<?php echo e($content->link_btn_1); ?>">
                            </div>
                            <div class="form-group">
                                <label for="txtButton2">Boton 2</label>
                                <input type="text" class="form-control" id="txtButton2" name="btn_2"
                                    value="<?php echo e($content->btn_2); ?>">
                            </div>
                            <div class="form-group">
                                <label for="txtLinkButton2">Link boton 2</label>
                                <input type="text" class="form-control" id="txtLinkButton2" name="link_btn_2"
                                    value="<?php echo e($content->link_btn_2); ?>">
                            </div>
                            <div class="form-group mt-4">
                                <button class="btn-lg btn btn-outline-secondary" id="btn-save"><i
                                        class="far fa-save"></i>
                                    Guardar Cambios</button>
                            </div>
                        </form>
                    </div>
                    <div class="col-12 col-md-5">
                        <div class="custom-card">

                            <h5>Recomendaciones</h5>
                            <ul class="mt-4">
                                <li>Bienvenido a la administracion de Inicio, por favor ingresa los datos necesarios para su
                                    respectiva gestión.</li><br>
                                <li>Recuerda que los textos con (<span style="color:red" >*</span>) indican que los campos son obligatorios.</li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>



            <div class=" tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
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
                        <h5>Recomendaciones</h5>
                        <ul class="mt-4">
                            <li>El peso máximo permitido es de 2MB. Puedes usar herramientas de compresión para reducir
                                el peso de la imagen.</li><br>
                            <li>Medidas: 1600x500 px.</li><br>
                            <li>El formato de la imagen debe ser jpg, png, jpeg, svg.</li>
                        </ul>
                    </div>

                </div>
            </div>

        </div>
    </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.platform', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/prod/citas-web/resources/views/pages/platform/home/banner_primary.blade.php ENDPATH**/ ?>