<?php $__env->startSection('custom-scripts'); ?>
    <script>
        $(function() {
            trackadmin.public.text_primary({

            })
        })
    </script>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>

    <div class="row mt-5 mt-md-0 d-flex justify-content-between">
        <div class="col-12 mb-4">
            <h5>Texto Principal</h5>
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
            </ul>
        </div>

        <div class="col-12  tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <div class="row">
                    <div class="col-12 col-md-7 mt-4 mt-md-0 ">
                        <form id="form_maintenance" class="needs-validation" novalidate>
                            <input type="hidden" value="<?php echo e($content->id); ?>" name="id">
                            <div class="form-group">
                                <label for="txtPrincipal">Texto Principal</label>
                                <input type="text" class="form-control" id="txtPrincipal" name="text_primary"
                                    value="<?php echo e($content->text_primary); ?>">
                            </div>

                            <div class="form-group">
                                <label for="txtSecondary">Texto Secundario</label>
                                <input type="text" class="form-control" id="txtSecondary" name="text_secondary"
                                    value="<?php echo e($content->text_secondary); ?>">
                            </div>
                            <div class="form-group">
                                <label for="description">Descripción</label>
                                <textarea class="form-control" id="txtDescription" name="description" rows="3"><?php echo e($content->description); ?>

                            </textarea>
                            </div>
                            <div class="form-group mt-4">
                                <button class="btn-lg btn btn-outline-secondary" id="btn-save"><i
                                        class="far fa-save"></i> Guardar Cambios</button>
                            </div>
                        </form>
                    </div>
                    <div class="col-12 col-md-5">
                        <div class="custom-card">
                            <h5>Recomendaciones:</h5>
                            <ul class="mt-4">
                                <li>Bienvenido a la administración de talleres , por favor ingresa los datos respectivos para su respectiva gestión.</li><br>
                                <li>Recuerda que los textos con (<span style="color:red">*</span>) indican que los campos son obligatorios. </li>
                            </ul>
                        </div>
                    </div>
                </div>
            <div>
        </div>
    <?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.platform', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/prod/citas-web/resources/views/pages/platform/workshops/main_text.blade.php ENDPATH**/ ?>