<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    protected $guarded = ['id'];
    protected $fillable = [];

        public function country()
    {
        return $this->belongsToMany('App\Country', 'country_id')->withTimestamps();
    }



}
