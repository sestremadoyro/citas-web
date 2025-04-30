<!doctype html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">

    <title><?php echo e($page_title ?? config('app.name')); ?></title>
    <?php echo $__env->yieldContent('meta-data'); ?>
    <?php echo $__env->yieldContent('ld-json'); ?>

    <!-- Fonts -->
    

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="icon" type="image/png" href="<?php echo e(asset('images/favicon.ico')); ?>" />

    <!-- Styles -->
    <link href="<?php echo e(asset('css/app.css')); ?>" rel="stylesheet">
    <?php echo $__env->yieldContent('custom-styles'); ?>
</head>
<style>
    .btn-wsp {
        width: 160px;
        height: 40px;
        background-color: #2cc23e;
        border-radius: 20px;
        position: fixed;
        bottom: 30px;
        color: #fff;
        display: flex;
        right: 25px;
        justify-content: center;
        align-items: center;
        z-index: 10;
    }

    .btn-wsp i {
        font-size: 28px;
        padding-right: 5px;
    }

    .btn-wsp:hover {
        text-decoration: none;
        color: #fff
    }

</style>

<body data-spy="scroll" data-target=".inner-link" data-offset="60">
    <main>
        <div class="loading" id="preloader">
            <div class="loader h-100 d-flex align-items-center justify-content-center">
                <div class="line-scale">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
        <?php echo $__env->make('components.web.header', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
        <?php echo $__env->yieldContent('content'); ?>
        <?php echo $__env->make('components.web.footer', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
        
    </main>
    <!-- Scripts -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js"
        integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous">
    </script>

    <script src="<?php echo e(asset('js/scripts_web.js')); ?>"></script>
    <?php echo $__env->yieldContent('custom-scripts'); ?>
</body>

</html>
<?php /**PATH /var/www/prod/citas-web/resources/views/layouts/web.blade.php ENDPATH**/ ?>