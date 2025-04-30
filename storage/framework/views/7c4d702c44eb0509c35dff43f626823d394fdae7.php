<?php $__env->startSection('title'); ?>
    <title>Error</title>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>

<div class="container px-1 px-md-4 py-5 mx-auto ">
    <div class="row page-error jumbotron bg-white mt-5 ">
        <div class="col-12 text-dark text-center ">
        <i class="far fa-frown icon-sad"></i>
            <h1><?php echo e($errorCode); ?></h1>
            <p><?php echo e($message); ?></p>
            <a class="btn btn-primary btn-lg" href="<?php echo e(url('/')); ?>">Inicio</a>
        </div>
    </div>
</div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.web', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/prod/citas-web/resources/views/error.blade.php ENDPATH**/ ?>