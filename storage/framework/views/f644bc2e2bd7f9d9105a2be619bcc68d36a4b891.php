<?php $__env->startSection('custom-styles'); ?>

<style>

    .img-workshop{
        height: 500px;
        width: 100%;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }

    .pdcus{
        margin-bottom: 3em;
        padding: 0em 5em;
    }

    @media(max-width: 1200px) {
        .pd-cero {
            padding: 1em !important;
        }
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

    
    <section class="background-11 container-workshops">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12 workshops-text">
                    <h5 class="text-encabezado" >Contactenos</h5>
                    <h2 class="text-dark">Agenda tu cita</h2>
                    <p class="pt-4 pb-7 col-md-7 col-xl-6 text-dark text-parrafo"><?php echo e($mainText->description); ?>

                    </p>
                </div>
            </div>
            <div class="row">
            <?php $__currentLoopData = $workshop; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <div class="col-12 col-sm-12 col-md-12 col-lg-6 pdcus pd-cero">
                <div class="card " >
                    <img src="<?php echo e($item->image); ?>" class="card-img-top" alt="<?php echo e($item->image); ?>">
                    <div class="card-body">
                      <h5 class="card-title"><?php echo e($item->name); ?></h5>
                      <p class="card-text"><?php echo nl2br($item->description); ?></p>
                      <a href="https://wa.me/<?php echo e(str_replace(' ', '', $item->phone)); ?>/" target="_blank" class=""> <i class="text-success fab fa-whatsapp"></i> <?php echo e($item->phone); ?> </a>
                      <a href="<?php echo e($item->link_cita); ?>" class="btn btn-outline-dark mt-1 btn-block">Agenda tu cita</a>
                    </div>
                  </div>
                <?php if($item->image!=null): ?>
                
                    
                    
                
                <?php endif; ?>
                
                
                
            </div>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </div>
        </div>
    </section>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.web', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/prod/citas-web/resources/views/pages/workshopContact.blade.php ENDPATH**/ ?>