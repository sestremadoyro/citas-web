<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Scope;
use Illuminate\Support\Facades\DB;
class AutoPart extends Model
{
    protected $table = 'auto_parts';

    protected $fillable = [
        'codigo',
        'nombre',
        'descripcion',
        'precio',
        'cantidad',
        'enlace_imagen',
        'imagen',
    ];

    protected $casts = [
        'precio' => 'decimal:2',
        'cantidad' => 'integer',
    ];

    public function scopeGetByCode($query, $code)
    {
        return $query->where('codigo', $code)->first();
    }

}