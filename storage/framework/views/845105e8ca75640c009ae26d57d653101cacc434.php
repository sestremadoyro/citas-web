<section class="banner-title pb-1" style="padding-top: 5.5em!important">
    <div class="container-fluid">
<div class="row">
    <div class="col-6 pl-7 box-beneficies">
       <h4 class="text-dark"> <?php echo e($page_title); ?></h4>
    </div>
</div>
</div>
</section>
<section class="banner">
    <div class=" <?php echo e($title == '' ? 'p-8' : ''); ?> ">        
        <div class="background-holder overlay" style="background-image:url('<?php echo e($banner); ?>')">
        </div>
        <!--/.background-holder-->
        <div class="container-fluid pl-5 pl-sm-5 pl-md-6">
            <div class="row">
                <div class="col-md-12 px-md-0 color-white" data-zanim-timeline="{}" data-zanim-trigger="scroll">
                    <div class="overflow-hidden box-beneficies text-white pl-4">
                        <h5 class="text-white"><?php echo e($sub_title); ?></h5>
                        <h1 class="color-white fs-3 fs-md-4 mb-0 zopacity" ><?php echo e($title); ?></h1>
                        <div class="nav zopacity mt-4 " aria-label="breadcrumb" role="navigation" >
                            <p class="text-white"><?php echo e($message); ?></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--/.row-->
    </div>
    <!--/.container-->
</section><?php /**PATH /var/www/prod/citas-web/resources/views/components/web/banner.blade.php ENDPATH**/ ?>