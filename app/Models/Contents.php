<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
class Contents extends Model
{
    protected $table = 'contents';

    protected $fillable = [
        'group',
        'page'
    ];

    /* public static function getSubscriptions(){
        $query = "select * from subscriptions where is_deleted = 0";
        $subscriptions = DB::connection('redagilelatam-logistic')->select($query);
        return $subscriptions;
    } */

    public function sections()
    {
        return $this->hasMany(Sections::class, 'content_id');
    }

    public function scopeFindByPage($query, $group, $page)
    {
        $content = $query->where('group', $group)->where('page', $page)->with(['sections'])->first();
        if (!$content) {
            $content = $query->create(['group' => $group, 'page' => $page]);
        }       

        return $content;
    }   
}
