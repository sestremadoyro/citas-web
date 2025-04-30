<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
class Contents extends Model
{
    protected $table = 'contents';

    protected $fillable = [
        
    ];

    /* public static function getSubscriptions(){
        $query = "select * from subscriptions where is_deleted = 0";
        $subscriptions = DB::connection('redagilelatam-logistic')->select($query);
        return $subscriptions;
    } */
}
