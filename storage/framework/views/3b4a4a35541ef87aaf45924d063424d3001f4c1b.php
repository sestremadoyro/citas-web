<?php $__env->startSection('custom-styles'); ?>

<style>

    .img-workshop{
        height: 550px;
        width: 100%;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }

</style>

<?php $__env->stopSection(); ?>



<?php $__env->startSection('meta-data'); ?>
    <!-- Para el navegador -->
    <link href="<?php echo e(asset('images/SEAT_Master_Logo_Horizontal_Positivo_RGB (1).png')); ?>" rel="image_src" />
    <meta content="Seat - <?php echo e($content->text_primary); ?>" property="og:title" />
    <meta
        content="<?php echo e($content->text_secondary); ?>"
        property="og:description" />
    <meta content="<?php echo e(asset('images/SEAT_Master_Logo_Vertical_RGB (1).png')); ?>" property="og:image" />
    <meta content="<?php echo e(url('/')); ?>" property="og:url" />
    <meta property="og:site_name" content="<?php echo e(url('/')); ?>" />
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>

<?php echo $__env->make('components.web.banner',[
    "page_title"=>'Beneficios',
    "title"=>$content->text_secondary,
    'sub_title' => $content->text_primary,
    'message' => $content->description,
    'banner' => $content->image,
], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

<section class="background-11 pb-0 container-beneficies">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 col-xl-8 pl-7 box-beneficies">
                <h5 class="text-dark"><?php echo e($first_benefice->text_primary); ?></h5>
                <h2 class="text-dark"><?php echo e($first_benefice->text_secondary); ?></h2>
                <p class="pt-4 pb-7"><?php echo e($first_benefice->description); ?></p>
            </div>
            <div class="col-12 col-xl-7 p-0">
                <div class="img-workshop" style="background-image: url('<?php echo e($second_benefice->image); ?>')">
                </div>
            </div>
            <div class="col-12 col-xl-5" style="background-color: #dedad4">
                <div class="d-flex box-beneficies align-items-center p-0 h-100">
                    <div data-zanim-timeline="{}" data-zanim-trigger="scroll" class="pl-7 pr-7">
                        <div class="overflow-hidden pl-1 margin-beneficies-exp">
                            <h5 class="text-dark" ><?php echo e($second_benefice->text_primary); ?></h5>
                        </div>
                        <div class="overflow-hidden">
                            <h2 class="text-dark font-title" ><?php echo e($second_benefice->text_secondary); ?></h2>
                        </div>
                        <div class="overflow-hidden">
                            <p class="mt-3" ><?php echo e($third_benefice->description); ?></p>
                        </div>
                        <div class="overflow-hidden margin-beneficies-cites mt-3">
                            <a href="<?php echo e($second_benefice->link_btn_1); ?>" target="_blank"><button type="button" class="btn btn-outline-dark btn-md"><?php echo e($second_benefice->btn_1); ?>

                            </button></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-xl-5 order-2 order-xl-1">
                <div class="d-flex box-beneficies align-items-center p-0 h-100">
                    <div data-zanim-timeline="{}" data-zanim-trigger="scroll" class="pl-7 pr-7">
                        <div class="overflow-hidden pl-1 margin-beneficies-exp" >
                            <h5 class="text-dark" ><?php echo e($third_benefice->text_primary); ?></h5>
                        </div>
                        <div class="overflow-hidden">
                            <h2 class="text-dark font-title" ><?php echo e($third_benefice->text_secondary); ?></h2>
                        </div>
                        <div class="overflow-hidden">
                            <p class="mt-3" ><?php echo e($third_benefice->description); ?></p>
                        </div>
                        <div class="overflow-hidden margin-beneficies-cites mt-3">
                            <a href="<?php echo e($third_benefice->link_btn_2); ?>" target="_blank"><button type="button" class="btn btn-outline-dark btn-md"><?php echo e($third_benefice->btn_2); ?>

                            </button></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-xl-7 p-0 order-1 order-xl-2">
                
                <div class="img-workshop" style="background-image: url('<?php echo e($third_benefice->image); ?>')">
                        
                </div>
            </div>
        </div>
    </div>
</section>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.web', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/prod/citas-web/resources/views/pages/benefices.blade.php ENDPATH**/ ?>