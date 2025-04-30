<?php
use Illuminate\Support\Facades\Route;
$active_route = Route::currentRouteName();
$list = [];

$home = [
    'Banner Principal' => 'banner_primary.home',
    'Guía rapida' => 'fast_guide.home',
    'Banner Repuestos' => 'banner_parts.home',
    'Transparencia' => 'transparency.home',
];

$benefices = [
    'Banner Principal' => 'banner_primary.benefices',
    'Primer Beneficio' => 'first.benefices',
    'Segundo Beneficio' => 'second.benefices',
    'Tercer Beneficio' => 'third.benefices',
];

$workshops = [
    'Banner Principal' => 'banner_primary.workshops',
    'Texto Principal' => 'main_text.workshops',
    'Talleres' => 'workshop.workshops',
];

$config = [
    'Detalles' => 'detail.config',
    'Vehiculos' => 'vehicle.config',
];

if (array_search($active_route, $home)) {
    $list = $home;
} elseif (array_search($active_route, $benefices)) {
    $list = $benefices;
} elseif (array_search($active_route, $workshops)) {
    $list = $workshops;
} elseif (array_search($active_route, $config)) {
    $list = $config;
}

/* 
$list = [
    'Banner Principal' => 'dashboard.index',
]; */

?>
<!-- Sidebar  -->
<?php if(count($list) != 0): ?>
    <div class="col-12 col-md-3">
        <ul id="sidebar-menu" class="nav flex-column pr-4">
            <?php $__currentLoopData = $list; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $name => $route): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <li class="nav-item">
                    <a class="nav-link <?php echo e($active_route == $route ? 'active' : ''); ?>"
                        href="<?php echo e(route($route)); ?>"><?php echo e($name); ?></a>
                </li>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </ul>
    </div>
<?php endif; ?>
<?php /**PATH /var/www/prod/citas-web/resources/views/components/platform/sidebar.blade.php ENDPATH**/ ?>