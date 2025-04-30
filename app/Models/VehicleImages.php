<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
class VehicleImages extends Model
{
    protected $table = 'vehicles_image';

    protected $fillable = [
        
    ];

    public static function getVehiclesImage($vehicle_id){
        $query = "select * from vehicles_image vi INNER JOIN vehicles v ON v.id = vi.vehicle_id where v.is_deleted = 0 and  v.id  = :p_vehicle_id";
        $vehicle = DB::select($query,[
            'p_vehicle_id' => $vehicle_id
        ]);
        return $vehicle;
    }

    public static function showVehiclesImage($model,$version,$mileage,$deliveryYear){
        $query = "SELECT vi.image FROM vehicles v INNER JOIN vehicles_image vi ON v.id = vi.vehicle_id  WHERE v.is_deleted = 0 and v.model = :p_model";

        /* 
        $query = "SELECT vi.image FROM vehicles v INNER JOIN vehicles_image vi ON v.id = vi.vehicle_id 
        WHERE v.model = :p_model 
        AND v.VERSION = :p_version 
        AND v.mileage = :p_mileage 
        AND v.delivery_year = :p_delivery_year"; */

        $vehicle = DB::select($query,[
            'p_model' => $model,
            /* 'p_version' => $version,
            'p_mileage' => $mileage,
            'p_delivery_year' => $deliveryYear */
        ]);
        
        return $vehicle;
    }
}