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

<?php $__env->startSection('custom-styles'); ?>
    <style>
        
        @media(max-width: 574px){
            .cf-plb{
                padding: 1em !important;
            }
        }

        @media(max-width: 760px){
            .cfb{
                padding-left: 2em !important;
            }
        }
        @media(max-width: 760px) {
            .img-banner {
                height: 50vh !important;
            }
        }

        @media(max-width: 1200px) {
            /* .text-title {
                font-size: 50px !important;
                letter-spacing: -0.05rem !important;

            } */
        }

        @media(max-width: 575px) {
            .text-dimension {
                padding-left: 70px !important;
            }
        }

        @media(max-width: 575px) {
            .text-position {
                margin-top: 0px !important;
            }
        }

        @media(max-width: 575px) {
            #icon-dimension {
                position: absolute;
                margin-top: -20px;
            }
        }

        @media(max-width: 575px) {
            #parrafo {
                padding-top: 20px !important;
            }
        }

        @media(max-width: 575px) {
            #cont {
                padding-top: 30px !important;
            }
        }

        .text-position {
            margin-top: 30px;
        }


        #container {
            width: 100%;
            height: 100%;
            margin: 0 auto;
            /* background-image: url("<?php echo e(asset('images/ATECA.jpg')); ?>"); */
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
        }

        .logo {
            width: 60px;
            height: 60px;
            /* margin: 0 auto; */
            /* background-image: url("<?php echo e(asset('images/IMAGE.PNG')); ?>"); */
            background-position: left;
            background-size: cover;
            background-repeat: no-repeat;
        }

        .text-subtitle {
            font-size: 0.99rem;
            font-weight: 900 !important;
        }

        .text-size {
            font-size: 7vw;
            letter-spacing: -0.20rem;
        }



        .btn-precise {
            padding: 0.8rem 1.2rem;
            width: 300px;
            height: 45px;
        }

        .img-bp {
            height: 500px;
            width: 100%;
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
        }

        .pd-l{
            padding-left: 5em;
        }

        .bh{
            position: static;
        }
    </style>
<?php $__env->stopSection(); ?>
<?php $__env->startSection('content'); ?>
    <section class="py-0 pb-0">

        <!--/.background-holder-->
        <div class="container-fluid main-header" style="">
            <div class="row h-100">
                <div class="col-12 col-md-12 col-lg-5 order-2 order-md-1 pb-6 content-header">
                    
                    <div class="pt-5 pt-sm-8">
                        <h1 class="text-dark text-title"><?php echo e($content->text_primary); ?>

                        </h1>
                    </div>
                    <div class="mt-4 mb-4">
                        <p class="text-dark lh-2"> <?php echo e($content->text_secondary); ?></p>
                    </div>
                    <div class="row">
                        <div class="col-10 col-md-7 col-lg-9">
                            <a class="btn btn-outline-dark btn-block"
                                href="<?php echo e($content->link_btn_1); ?>"><b><?php echo e($content->btn_1); ?></b><span
                                    class=" ml-2"></span></a><br>
                            <a class="btn btn-dark mt-0 btn-block" target="_blank"
                                href="<?php echo e($content->link_btn_2); ?>"><b><?php echo e($content->btn_2); ?></b><span
                                    class=" ml-2"></span></a>
                        </div>
                    </div>
                    
                </div>

                <div class="col-12 col-md-12 col-lg-7 order-1 order-md-2 p-0">
                    <div id="container" class="img-banner"
                        style="background-image: url('<?php echo e($content->image); ?>');">
                        
                        
                        
                    </div>
                </div>
            </div>
        </div>
        <!--/.row-->
        </div>
        <!--/.container-->
    </section>
    <section class="background-11 pt-5">
        <div class="container-fluid cf cf-pl">

            <div class="col-12 text-center">
                <h5 class="text-dark "><small class="text-subtitle"><?php echo e($fastGuide->text_primary); ?></small>
                </h5>
                <h3 class="text-dark "><b><?php echo e($fastGuide->text_secondary); ?></b></h3>

            </div>

            
            <div class="row no-gutters pos-relative mt-6">
                <div class=" d-none d-lg-block"></div>
                <div class="col-lg-6 py-3 py-lg-0 mb-0" style="min-height:400px;">
                    <div class="background-holder bh radius-tr-lg-0"
                    style="background-image: url('<?php echo e($section1->image); ?>');">
                    </div>
                    
                    
                    <!--/.background-holder-->
                </div>
                <div
                    class="col-lg-6 px-lg-5 py-lg-6 p-4 my-lg-0 background-white radius-bl-secondary radius-bl-lg-0 radius-br-secondary radius-br-lg-0 radius-tr-lg-secondary">
                    <div class="d-flex align-items-center h-100">
                        <div data-zanim-timeline="{}" data-zanim-trigger="scroll">
                            <div class="overflow-hidden">
                                <h5 ><?php echo e($section1->title); ?></h5>
                            </div>
                            <div class="overflow-hidden">
                                <p class="mt-3"><?php echo e($section1->description); ?></p>
                            </div>
                            <div class="overflow-hidden">
                                <div data-zanim='{"delay":0.2}'><a class="d-flex align-items-center"
                                        href="<?php echo e($section1->link_btn); ?>"><?php echo e($section1->btn); ?>

                                        <div class="overflow-hidden ml-2"><span class="fas fa-chevron-right"></span>
                                        </div>
                                    </a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row no-gutters pos-relative mt-4 mt-lg-0">
                <div class=" d-none d-lg-block"></div>
                <div class="col-lg-6 py-3 py-lg-0 mb-0 order-lg-2" style="min-height:400px;">
                    <div class="background-holder bh radius-tr-lg-0"
                    style="background-image: url('<?php echo e($section2->image); ?>');">
                    </div>
                    
                    <!--/.background-holder-->
                </div>
                <div
                    class="col-lg-6 px-lg-5 py-lg-6 p-4 my-lg-0 background-white radius-bl-secondary radius-bl-lg-0 radius-br-secondary radius-br-lg-0">
                    <div class="d-flex align-items-center h-100">
                        <div data-zanim-timeline="{}" data-zanim-trigger="scroll">
                            <div class="overflow-hidden">
                                <h5 ><?php echo e($section2->title); ?></h5>
                            </div>
                            <div class="overflow-hidden">
                                <p class="mt-3" ><?php echo e($section2->description); ?></p>
                            </div>
                            <div class="overflow-hidden">
                                <div data-zanim='{"delay":0.2}'><a class="d-flex align-items-center"
                                        href="<?php echo e($section2->link_btn); ?>"><?php echo e($section2->btn); ?>

                                        <div class="overflow-hidden ml-2"><span class="fas fa-chevron-right"></span>
                                        </div>
                                    </a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row no-gutters pos-relative mt-4 mt-lg-0">
                <div class="d-none d-lg-block"></div>
                <div class="col-lg-6 py-3 py-lg-0 mb-0" style="min-height:400px;">
                    <div class="background-holder bh radius-bl-0 "
                    style="background-image: url('<?php echo e($section3->image); ?>');">
                    </div>
                    
                    <!--/.background-holder-->
                </div>
                <div
                    class="col-lg-6 px-lg-5 py-lg-6 p-4 my-lg-0 background-white radius-bl-secondary radius-bl-lg-0 radius-br-secondary">
                    <div class="d-flex align-items-center h-100">
                        <div data-zanim-timeline="{}" data-zanim-trigger="scroll">
                            <div class="overflow-hidden">
                                <h5 ><?php echo e($section3->title); ?></h5>
                            </div>
                            <div class="overflow-hidden">
                                <p class="mt-3" ><?php echo e($section3->description); ?>?</p>
                            </div>
                            <div class="overflow-hidden">
                                <div data-zanim='{"delay":0.2}'><a class="d-flex align-items-center"
                                        href="<?php echo e($section3->link_btn); ?>"><?php echo e($section3->btn); ?>

                                        <div class="overflow-hidden ml-2">
                                            <span class="fas fa-chevron-right"></span>
                                        </div>
                                    </a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="p-0 ml-0" style="background-color:#B0C4DE">
        <div class="container-fluid">
            <div class="row p-0">
                <div class="col-12 col-xl-7 p-0">
                    <img class="img-bp img-fluid"
                        style="background-image: url('<?php echo e($bannerParts->image); ?>');" alt="">
                </div>
                <div class="col-12 col-xl-5 p-5 mt-7">
                    <h1 class="text-dark fs-md-4 text-size"><b><?php echo e($bannerParts->text_primary); ?></b>
                    </h1>
                    <a class="mt-4 btn btn-outline-dark"
                        href="<?php echo e($bannerParts->link_btn_1); ?>"><b><?php echo e($bannerParts->btn_1); ?></b></a>
                </div>
            </div>
        </div>
        <!--/.container-->
    </section>


    <section class="background-11 pt-5">
        <div class="container-fluid cf cf-plb">
            <h5 class="text-center fs-2 fs-md-3"><small class="text-subtitle"><?php echo e($transparency->text_primary); ?></small>
            </h5>
            <h3 class="text-center fs-2 fs-md-3"><b><?php echo e($transparency->text_secondary); ?></b></h3>
            <div class="row mt-7">
                <div class="col-sm-6 col-lg-4 px-4 px-sm-3 text-lg-x" data-zanim-timeline="{}" data-zanim-trigger="scroll">
                    <div id="icon-dimension" class="logo" style="background-image: url('<?php echo e($section4->image); ?>');" >
                    </div>
                    
                    <h5 class="text-position" ><span
                            class="color-primary fs-2 icon-position-fix mr-0 text-dimension"></span><?php echo e($section4->title); ?>

                    </h5>
                    <p id="parrafo" class="mt-3 pr-3 pr-lg-5 mb-0 " >
                        <?php echo e($section4->description); ?></p>
                </div>
                <div id="cont" class="col-sm-6 col-lg-4 px-4 px-sm-3 mt-4 mt-sm-0 text-lg-x" data-zanim-timeline="{}"
                    data-zanim-trigger="scroll">
                    <div id="icon-dimension" class="logo" style="background-image: url('<?php echo e($section5->image); ?>');" >
                    </div>
                    
                    <h5 class="text-position" ><span
                            class=" color-primary mr-0 text-dimension"></span><?php echo e($section5->title); ?>

                    </h5>
                    <p id="parrafo" class="mt-3 pr-3 pr-lg-5 mb-0 " >
                        <?php echo e($section5->description); ?></p>
                </div>
                <div id="cont" class="col-sm-6 col-lg-4 px-4 px-sm-3 mt-4 mt-lg-0 text-lg-x" data-zanim-timeline="{}"
                    data-zanim-trigger="scroll">
                    <div id="icon-dimension" class="logo" style="background-image: url('<?php echo e($section6->image); ?>');" >
                    </div>
                    
                    <h5 class="text-position" ><span
                            class=" color-primary mr-0 text-dimension"></span><?php echo e($section6->title); ?>

                    </h5>
                    <p id="parrafo" class="mt-3 pr-3 pr-lg-5 mb-0 " >
                        <?php echo e($section6->description); ?></p>
                </div>
            </div>

            <div class="d-flex justify-content-center pt-5">
                <a href="<?php echo e($transparency->link_btn_general); ?>" target="_blank" class="btn btn-outline-dark"
                    style='width:250px; height:45px'><?php echo e($transparency->btn_general); ?></a>
            </div>

            <!--/.row-->
        </div>

        <!--/.container-->
    </section>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.web', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/prod/citas-web/resources/views/home.blade.php ENDPATH**/ ?>