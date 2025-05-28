<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Platform\DshHomeController;
use App\Http\Controllers\Platform\DshBeneficesController;
use App\Http\Controllers\Platform\DshWorkshopsController;
use App\Http\Controllers\Platform\DshConfigController;
use App\Http\Controllers\Web\BeneficesController;
use App\Http\Controllers\Web\WorkshopsController;
use App\Http\Controllers\Web\HomeController;
use App\Http\Controllers\Web\MaintenanceController;
use App\Http\Controllers\Web\TermsAndConditionsController;
#use App\Http\Controllers\Platform\BannerPrimaryController;

#Api
use App\Http\Controllers\Api\ContentApiController;
use App\Http\Controllers\Api\WorkshopsApiController;
use App\Http\Controllers\Api\SectionApiController;
use App\Http\Controllers\Api\UserApiController;
use App\Http\Controllers\Api\ConfigApiController;
use App\Http\Controllers\Api\VehiclesApiController;
use App\Http\Controllers\Api\PublicApiController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/* Route::get('/', function () {
    return view('home');
}); */

Auth::routes();

Route::get('/', [HomeController::class, 'index']);

Route::get('/beneficios', [BeneficesController::class, 'index'])->name('beneficios');

// Route::get('/beneficios', [BeneficesController::class, 'first_benefice'])->name('beneficios');

Route::get('/talleres', [WorkshopsController::class, 'index'])->name('talleres');

Route::get('/consultas', [MaintenanceController::class, 'index'])->name('consultas');

Route::get('/talleresContactos', [WorkshopsController::class, 'indexContact'])->name('talleresContactos');

Route::get('/terminos_y_condiciones', [TermsAndConditionsController::class, 'index'])->name('terminos_y_condificiones');

Route::put('/general/api/content/save', [ContentApiController::class, 'save'])->name('general.content.save');
Route::post('/general/api/content/image/save', [ContentApiController::class, 'saveImage'])->name('general.image.save');

Route::put('/general/api/section/save', [SectionApiController::class, 'save'])->name('general.section.save');
Route::post('/general/api/section/save/image', [SectionApiController::class, 'saveImage']);

Route::put('/general/api/workshops/save', [WorkshopsApiController::class, 'save'])->name('general.workshops.save');
Route::post('/general/api/workshop/save/image', [WorkshopsApiController::class, 'saveImage']);

#Inicio
Route::get('/inicio/banner_principal', [DshHomeController::class, 'banner_primary'])->name('banner_primary.home');

Route::get('/inicio/guia_rapida', [DshHomeController::class, 'fast_guide'])->name('fast_guide.home');

Route::get('/inicio/banner_repuestos', [DshHomeController::class, 'banner_parts'])->name('banner_parts.home');

Route::get('/inicio/transparencia', [DshHomeController::class, 'transparency'])->name('transparency.home');

Route::get('/inicio/mantenimiento', [DshHomeController::class, 'maintenance'])->name('maintenance.home');

#Beneficios
Route::get('/beneficios/banner_principal', [DshBeneficesController::class, 'banner_primary'])->name('banner_primary.benefices');

// Route::put('/api/banner_primary_benefice/save', [DshBeneficesController::class, 'save'])->name('banner_primary.save');

Route::get('/beneficios/primer_beneficio', [DshBeneficesController::class, 'first_benefice'])->name('first.benefices');
// Route::put('/api/first_benefice/save', [ContentApiController::class, 'save'])->name('first_benefice.save');

Route::get('/beneficios/segundo_beneficio', [DshBeneficesController::class, 'second_benefice'])->name('second.benefices');
// Route::put('/api/second_benefice/save', [ContentApiController::class, 'save'])->name('second_benefice.save');

Route::get('/beneficios/tercer_beneficio', [DshBeneficesController::class, 'third_benefice'])->name('third.benefices');
// Route::put('/api/third_benefice/save', [ContentApiController::class, 'save'])->name('third_benefice.save');

#Talleres
Route::get('/talleres/banner_principal', [DshWorkshopsController::class, 'banner_primary'])->name('banner_primary.workshops');

Route::get('/talleres/texto_principal', [DshWorkshopsController::class, 'main_text'])->name('main_text.workshops');

Route::get('/talleres/taller', [DshWorkshopsController::class, 'workshop'])->name('workshop.workshops');

Route::delete('talleres/api/delete/{itemId}',[WorkshopsApiController::class, 'deleteWorkshop']);

#Perfil
Route::get('/perfil', [DshHomeController::class, 'perfil'])->name('profile.index');
Route::post('/api/profile/save', [UserApiController::class, 'updateUser'])->name('profile.update');

#Mantenimiento

Route::get('/workshop/api/departament/{departament}', [PublicApiController::class, 'getWorkshopsByDepartament']);

Route::post('/api/vehicle/image/show', [PublicApiController::class, 'showVehiclesImage']);

#Configuraciones
Route::get('/configuraciones/detalles', [DshConfigController::class, 'detail'])->name('detail.config');

Route::put('/general/api/detail/save', [ConfigApiController::class, 'save'])->name('general.detail.save');

Route::get('/configuraciones/vehiculos', [DshConfigController::class, 'vehicle'])->name('vehicle.config');

Route::get('/vehicle/api/list', [VehiclesApiController::class, 'getVehicles']);

Route::post('/configuraciones/vehiculos/import', [VehiclesApiController::class, 'import'])->name('vehicles.import');

Route::get('/configuraciones/vehiculos/export', [VehiclesApiController::class, 'template'])->name('template_vehicles.export');

#API EUROMOTORS
Route::post('/api/WebTransparencySeat', [PublicApiController::class, 'getMaintenance']);

Route::get('/vehicle/api/images/{vehicle_id}', [VehiclesApiController::class, 'getImagesVehicles']);

Route::delete('/vehicle/api/delete/{vehicleId}', [VehiclesApiController::class, 'deleteVehicles']);

Route::post('/vehicle/api/save', [VehiclesApiController::class, 'saveVehicles']);

Route::post('/api/vehicle/image/delete', [VehiclesApiController::class, 'deleteVehicleImage']);
// Route::post('/vehicle/api/edit', [VehiclesApiController::class, 'editVehicle']);
Route::delete('/vehicle/api/all/delete', [VehiclesApiController::class, 'deleteVehiclesAll']);