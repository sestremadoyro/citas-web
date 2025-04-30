<nav class="navbar navbar-expand-lg navbar-light bg-dark text-white">
    <div class="container">
        <a href="<?php echo e(url("/")); ?>">
            <img src="<?php echo e(asset('images/logo_white.png')); ?>" alt="" width="140px">
        </a>
        
        <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fas fa-align-justify"></i>
        </button> 

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="nav ml-auto">
                <li class="nav-item">
                    <a id="navbarDropdown" class="nav-link" href="<?php echo e(route('profile.index')); ?>" role="button" >
                        <i class="far fa-user"></i> <?php echo e(Auth::user()->name); ?>

                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" role="button" href="<?php echo e(route('logout')); ?>"
                           onclick="event.preventDefault();
                                         document.getElementById('logout-form').submit();">
                            <?php echo e(__('Cerrar Sesión')); ?> <i class="fas fa-sign-in-alt"></i>
                        </a>

                        <form id="logout-form" action="<?php echo e(route('logout')); ?>" method="POST" class="d-none">
                            <?php echo csrf_field(); ?>
                        </form>
                </li>
            </ul>
        </div>
    </div>
</nav>

<!--  -->
<div class=" pt-2 pb-2 mb-5 border-bottom nav-menu">
<div class="container">
<ul class="nav ">
    <li class="nav-item">
      <a class="nav-link active" href="<?php echo e(route('banner_primary.home')); ?>">Inicio</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="<?php echo e(route('banner_primary.benefices')); ?>">Beneficios</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="<?php echo e(route('banner_primary.workshops')); ?>">Talleres</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="<?php echo e(route('detail.config')); ?>">Configuracion</a>
      </li>
  </ul>
</div>
</div><?php /**PATH /var/www/prod/citas-web/resources/views/components/platform/header.blade.php ENDPATH**/ ?>