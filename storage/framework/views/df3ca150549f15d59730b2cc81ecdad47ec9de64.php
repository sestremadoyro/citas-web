<?php
$controller = new \App\Http\Controllers\Controller(request());
$detail = $controller->getDetail();
?>
<section style="background-color: #363636" class="footer text-center py-4">
    <div class="container-fluid">
        <div class="row d-flex justify-md-content-between text-white">
            <div class="pl-md-5 pr-md-5 col-12 ">
                <ul class="nav nav-footer brd-primary d-block d-md-flex text-left text-md-center font-bold">
                    <li class="d-block d-md-none nav-item ml-auto pr-4 brd ">
                        <div class="nav-link">
                            <img width="35px" height="35px" src="<?php echo e(asset('images/bandera.png')); ?>" alt="" />
                            <span>Perú</span>
                        </div>
                    </li>
                    <li class="nav-item brd">
                        <a href="<?php echo e(route('beneficios')); ?>" class="nav-link text-white ">Beneficios</a>
                    </li>
                    <li class="nav-item brd">
                        <a href="<?php echo e(route('talleres')); ?>" class="nav-link text-white">Talleres</a>
                    </li>
                    <li class="nav-item brd">
                        <a href="<?php echo e(route('consultas')); ?>" class="nav-link text-white">Consulta
                            Mantenimiento</a>
                    </li>
            
                    <li class="d-none d-md-block nav-item ml-auto pr-4">
                        <div class="pl-3">
                            <img width="35px" height="35px" src="<?php echo e(asset('images/bandera.png')); ?>" alt="" />
                            <span>Perú</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="row mt-0 mt-md-4">
            <div class="col-sm-12 col-md-8 pl-md-5 text-center text-md-left order-2 order-md-1 ">
                <a href="<?php echo e(url('/')); ?>" class="pg-custom text-white"><img class="" width="80px"
                        src="<?php echo e(asset('images/logo_vertical_white.png')); ?>" alt="" /></a>
            </div>

            <div class="col-12 col-md-4 pr-md-6  order-1 order-md-2  d-md-flex align-items-center justify-content-end">
                <div class="brd ">
                    <ul class="nav justify-content-center justify-content-md-end">
                        <li class="nav-item ">
                            <a target="_blank" class="nav-link text-white" href="https://www.facebook.com/SEATpe/">
                                <img src="<?php echo e(asset('images/ico-facebook-white.svg')); ?>" alt="" width="26px">
                            </a>
                        </li>

                       

                        <li class="nav-item">
                            <a target="_blank" class="nav-link text-white" href="https://www.instagram.com/seat/"><i
                                    class="fab fa-instagram"></i></a>
                        </li>

                        
                        <li class="nav-item">
                            <a target="_blank" class="nav-link text-white" href="https://www.youtube.com/seat">
                                <img src="<?php echo e(asset('images/ico-youtube-white.svg')); ?>" alt="" width="26px">
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-12 pl-md-5 order-3 text-md-left text-center">
                <div class="color-white nav-link">
                    <script>
                        document.write(new Date().getFullYear());
                    </script> <?php echo e(config('app.name', 'Laravel')); ?>

                    Perú . Todos los derechos reservados.
                </div>
            </div>
        </div>
    </div>
</section>
<a id="" href="<?php echo e(route('talleresContactos')); ?>" target="_blank" class="btn-wsp">
    <i class="fab fa-whatsapp"></i> Contactenos</a>

<?php /**PATH /var/www/prod/citas-web/resources/views/components/web/footer.blade.php ENDPATH**/ ?>