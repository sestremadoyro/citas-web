<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
class Workshops extends Model
{
    protected $table = 'workshops';

    protected $fillable = [
        
    ];

    public static function getWorkShop(){
        $query = "select * from workshops where is_deleted=0 ";
        $departament = DB::select($query);
        // dd($departament);
        return $departament;
    } 

    public static function getDepartament(){
        $query = "select distinct(departament) from workshops where departament != 'null' and is_deleted=0 ";
        $departament = DB::select($query);
        // dd($departament);
        return $departament;
    } 

    public static function getWorkshopsByDepartament($departament){
        $query = "SELECT id, name,description ,link_cita, map_link  FROM workshops WHERE departament = :p_departament and is_deleted=0";
        $data = DB::select($query,[
            'p_departament' => $departament
        ]);
        // dd($departament);
        return $data;
    } 

}
