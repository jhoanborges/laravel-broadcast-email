<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

class Clients extends Model
{
    protected $guarded = ['id'];
    protected $fillable = [];

    //por defecto este global scope filtrata los usuariios con status activo sin necesidad de hacer la consulta
      /*  protected static function boot()
    {
        parent::boot();
        static::addGlobalScope('status', function (Builder $builder) {
            $builder->where('status',  true);
        });
    }*/
}
