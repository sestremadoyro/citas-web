<?php $__env->startSection('custom-scripts'); ?>
    <script>
        $(function() {
            trackadmin.public.fast_guide({

            })
        })
    </script>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>

    <div class="row mt-5 mt-md-0 d-flex justify-content-between">
        <div class="col-12 mb-4">
            <h5>Guia Rapida</h5>
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
                            <input type="hidden" value="<?php echo e($fastGuide->id); ?>" name="id"  id="content_id">
                            <input type="hidden" value="<?php echo e($section1->id); ?>" id="section1_id" name="section1_id">
                            <input type="hidden" value="<?php echo e($section2->id); ?>" id="section2_id" name="section2_id">
                            <input type="hidden" value="<?php echo e($section3->id); ?>" id="section3_id" name="section3_id">
                            <div class="form-group">
                                <label for="txtPrimary">Texto principal</label>
                                <input type="text" class="form-control" id="txtPrimary" name="text_primary"
                                    value="<?php echo e($fastGuide->text_primary); ?>">
                            </div>

                            <div class="form-group">
                                <label for="txtSecondary">Texto secundario</label>
                                <input type="text" class="form-control" id="txtSecondary" name="text_secondary"
                                    value="<?php echo e($fastGuide->text_secondary); ?>">
                            </div>
                            <div class="col-12 mb-4 pl-0">
                                <h6>Seccion 1</h6>
                            </div>
                            <div class="form-group">
                                <label for="txtTitle1">Titulo</label>
                                <input type="text" class="form-control" id="txtTitle1" name="title_1"
                                    value="<?php echo e($section1->title); ?>">
                            </div>
                            <div class="form-group">
                                <label for="txtDescription1">Descripcion</label>
                                <input type="text" class="form-control" id="txtDescription1" name="description_1"
                                    value="<?php echo e($section1->description); ?>">
                            </div>
                            <div class="form-group">
                                <label for="txtButton1">Boton 1</label>
                                <input type="text" class="form-control" id="txtButton1" name="btn_1"
                                    value="<?php echo e($section1->btn); ?>">
                            </div>
                            <div class="form-group">
                                <label for="txtLinkButton1">Link boton 1</label>
                                <input type="text" class="form-control" id="txtLinkButton1" name="link_btn_1"
                                    value="<?php echo e($section1->link_btn); ?>">
                            </div>
                            <div class="col-12 mb-4 pl-0">
                                <h6>Seccion 2</h6>
                            </div>
                            <div class="form-group">
                                <label for="txtTitle2">Titulo</label>
                                <input type="text" class="form-control" id="txtTitle2" name="title_2"
                                    value="<?php echo e($section2->title); ?>">
                            </div>
                            <div class="form-group">
                                <label for="txtDescription2">Descripción</label>
                                <input type="text" class="form-control" id="txtDescription2" name="description_2"
                                    value="<?php echo e($section2->description); ?>">
                            </div>
                            <div class="form-group">
                                <label for="txtButton2">Boton 2</label>
                                <input type="text" class="form-control" id="txtButton2" name="btn_2"
                                    value="<?php echo e($section2->btn); ?>">
                            </div>
                            <div class="form-group">
                                <label for="txtLinkButton2">Link boton 2</label>
                                <input type="text" class="form-control" id="txtLinkButton2" name="link_btn_2"
                                    value="<?php echo e($section2->link_btn); ?>">
                            </div>
                            <div class="col-12 mb-4 pl-0">
                                <h6>Seccion 3</h6>
                            </div>
                            <div class="form-group">
                                <label for="txtTitle3">Titulo</label>
                                <input type="text" class="form-control" id="txtTitle3" name="title_3"
                                    value="<?php echo e($section3->title); ?>">
                            </div>
                            <div class="form-group">
                                <label for="txtDescription3">Descripcion</label>
                                <input type="text" class="form-control" id="txtDescription3" name="descripcion_3"
                                    value="<?php echo e($section3->description); ?>">
                            </div>
                            <div class="form-group">
                                <label for="txtButton3">Boton 3</label>
                                <input type="text" class="form-control" id="txtButton3" name="btn_3"
                                    value="<?php echo e($section3->btn); ?>">
                            </div>
                            <div class="form-group">
                                <label for="txtLinkButton3">Link boton 3</label>
                                <input type="text" class="form-control" id="txtLinkButton3" name="link_btn_3"
                                    value="<?php echo e($section3->link_btn); ?>">
                            </div>
                            <div class="form-group mt-4">
                                <button class="btn-lg btn btn-outline-secondary" id="btn-save"><i
                                        class="far fa-save"></i> Guardar
                                    Cambios</button>
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

                    <div class="col-12 col-md-7 mt-4 mt-md-0 content-images">
                        <!--  -->
                        <div class="item-image mt-4">
                                <div class="content-file-img mb-4 d-flex justify-content-between align-items-center">
                                    <h5>Seccion 1</h5>
                                    <button class="btn btn-outline-secondary btn-file btn-sm" img-content="img-<?php echo e($section1->id); ?>" input-file="fileInputImage_<?php echo e($section1->id); ?>">
                                        <i class="fas fa-plus"></i> Cargar Imagen
                                    </button>
                                    <input type="file" class="d-none input-file" id="fileInputImage_<?php echo e($section1->id); ?>" lang="es" item_id="<?php echo e($section1->id); ?>" accept=".jpg,.png,.jpeg,.svg">
                                </div>
                                <div class="pl-5 pr-5">
                                    <img src="<?php echo e($section1->image); ?>" alt="" class="img-fluid shadow " id="img-<?php echo e($section1->id); ?>">
                                </div>
                                
                            </div>
                        <!--  -->
                        <!--  -->
                        <div class="item-image mt-4">
                                <div class="content-file-img mb-4 d-flex justify-content-between align-items-center">
                                    <h5>Seccion 2</h5>
                                    <button class="btn btn-outline-secondary btn-file btn-sm" img-content="img-<?php echo e($section2->id); ?>" input-file="fileInputImage_<?php echo e($section2->id); ?>">
                                        <i class="fas fa-plus"></i> Cargar Imagen
                                    </button>
                                    <input type="file" class="d-none input-file" id="fileInputImage_<?php echo e($section2->id); ?>" lang="es" item_id="<?php echo e($section2->id); ?>" accept=".jpg,.png,.jpeg,.svg">
                                </div>
                                <div class="pl-5 pr-5">
                                    <img src="<?php echo e($section2->image); ?>" alt="" class="img-fluid shadow " id="img-<?php echo e($section2->id); ?>">
                                </div>
                                
                            </div>
                        <!--  -->
                        <!--  -->
                        <div class="item-image mt-4">
                                <div class="content-file-img mb-4 d-flex justify-content-between align-items-center">
                                    <h5>Seccion 3</h5>
                                    <button class="btn btn-outline-secondary btn-file btn-sm" img-content="img-<?php echo e($section3->id); ?>" input-file="fileInputImage_<?php echo e($section3->id); ?>">
                                        <i class="fas fa-plus"></i> Cargar Imagen
                                    </button>
                                    <input type="file" class="d-none input-file" id="fileInputImage_<?php echo e($section3->id); ?>" lang="es" item_id="<?php echo e($section3->id); ?>" accept=".jpg,.png,.jpeg,.svg">
                                </div>
                                <div class="pl-5 pr-5">
                                    <img src="<?php echo e($section3->image); ?>" alt="" class="img-fluid shadow " id="img-<?php echo e($section3->id); ?>">
                                </div>
                                
                            </div>
                        <!--  -->

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
                                <li>Medidas para desktop y tablet: de 660px de ancho y 500px de alto.</li><br>
                            <li>El formato de la imagen debe ser jpg, png, jpeg, svg.</li>
                        </ul>
                    </div>

                </div>
            </div>

        </div>
    </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.platform', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/prod/citas-web/resources/views/pages/platform/home/fast_guide.blade.php ENDPATH**/ ?>