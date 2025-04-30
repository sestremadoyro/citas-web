<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
class Vehicle extends Model
{
    protected $table = 'vehicles';

    protected $fillable = [
        
    ];

    public static function getVehicles(){
        $vehicle = DB::table("vehicles")
        ->leftJoin('vehicles_details', 'vehicles.id', '=', 'vehicles_details.vehicle_id')
        ->where('vehicles.is_deleted',0)
        ->select(DB::raw('vehicles.*,vehicles_details.id as detail_id,vehicles_details.version,vehicles_details.mileage,vehicles_details.delivery_year'))->get();
        return $vehicle;
    }

    public static function getModels(){
        #$query = "select vh.id,vh.model,count(vd.id) as count_details FROM vehicles as vh inner join vehicles_details vd on vh.id = vd.vehicle_id where vh.is_deleted = 0;";
        $vehicle = DB::table("vehicles")->leftJoin('vehicles_details', 'vehicles.id', '=', 'vehicles_details.vehicle_id')
        ->where('vehicles.is_deleted',0)
        ->select(DB::raw('count(vehicles_details.id) as count_details,vehicles.*'))
        ->groupBy('vehicles.id')
        ->get();
        return $vehicle;
    }

    /* public static function getModels(){
        $query = "select distinct(model) from vehicles where is_deleted = 0";
        $model = DB::select($query);
        return $model;
    }

    public static function getVersions(){
        $query = "select distinct(version) from vehicles where is_deleted = 0";
        $version = DB::select($query);
        return $version;
    }

    public static function getMileages(){
        $query = "select distinct(mileage) from vehicles where is_deleted = 0";
        $mileage = DB::select($query);
        return $mileage;
    }

    public static function getDeliveryYears(){
        $query = "select distinct(delivery_year) from vehicles where is_deleted = 0";
        $delivery_year = DB::select($query);
        return $delivery_year;
    } */

    
}