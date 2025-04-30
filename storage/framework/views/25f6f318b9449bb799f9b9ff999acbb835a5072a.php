<?php $__env->startSection('custom-styles'); ?>
    <style>
        .img-workshop {
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
    <link href="<?php echo e(asset('images/logo_vertical_dark.jpg')); ?>" rel="image_src" />
    <meta content="Seat - <?php echo e($content->text_primary); ?>" property="og:title" />
    <meta content="<?php echo e($content->text_secondary); ?>" property="og:description" />
    <meta content="<?php echo e(asset('images/logo_vertical_dark.jpg')); ?>" property="og:image" />
    <meta content="<?php echo e(url('/')); ?>" property="og:url" />
    <meta property="og:site_name" content="<?php echo e(url('/')); ?>" />
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <?php echo $__env->make('components.web.banner', [
        'page_title' => 'Talleres',
        'title' => '',
        'sub_title' => '',
        'message' => '',
        'banner' => $content->image,
    ], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    <section class="background-11 container-workshops">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12 workshops-text">
                    <h5 class="text-encabezado" ><?php echo e($mainText->text_secondary); ?></h5>
                    <h2 class="text-dark"><?php echo e($mainText->text_primary); ?></h2>
                    <p class="pt-4 pb-7 col-md-7 col-xl-6 text-dark text-parrafo"><?php echo e($mainText->description); ?>

                    </p>
                </div>
            </div>
            <?php $__currentLoopData = $workshop; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <div class="row mb-6">
                    <?php if($item->image != null): ?>
                        <div class="col-md-12 col-lg-6 col-xl-8 pl-xl-7">
                            
                            <div class="img-workshop" style="background-image: url('<?php echo e($item->image); ?>')">

                            </div>
                        </div>
                    <?php endif; ?>

                    <div
                        class="col-md-12 col-lg-6 <?php echo e($item->image != null ? 'col-xl-4' : 'col-xl-8 pl-xl-7'); ?> mt-5 mt-lg-5 information">
                        <div class="d-flex align-items-center p-0 h-100">
                            <div>
                                <div class="overflow-hidden">
                                    <h2 class="text-dark font-title"><?php echo e($item->name); ?></h2>
                                </div>
                                <div class="overflow-hidden list">
                                    <p class="mt-3" >
                                        <?php echo nl2br($item->description); ?>

                                    </p>
                                    <div>
                                        <a href="https://wa.me/<?php echo e(str_replace(' ', '', $item->phone)); ?>/" target="_blank" class=""> <i class="text-success fab fa-whatsapp"></i> <?php echo e($item->phone); ?> </a>
                                    </div>
                                    <span style="color:red" class="mt-3 fas fa-chevron-right"></span><a href="<?php echo e($item->link_cita); ?>"
                                        class=""> Ir a <?php echo e($item->name); ?> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

        </div>
    </section>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.web', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/prod/citas-web/resources/views/pages/workshops.blade.php ENDPATH**/ ?>