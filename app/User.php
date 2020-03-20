<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Builder;


class User extends Authenticatable
{
    use Notifiable;

    protected $guarded = ['id'];
    protected $fillable = ['name', 'lastname', 'username','email', 'password', 'company','phone','store_url','commission','status'];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];


    protected static function boot()
{
    parent::boot();

    static::addGlobalScope('order', function (Builder $builder) {
        $builder->orderBy('created_at', 'desc');
    });
}



    public function roles()
    {
        return $this
        ->belongsToMany('App\Roles')
        ->withTimestamps();
    }

    public function hasRole($role)
    {
        //aca tambien podria ser user_id si se trabaja con id
        if ($this->roles()
            ->where('name', $role)
            ->first() ) {
            return true;
        }
        return false;
    }

    public function hasAnyRole($roles)
    {
        if (is_array($roles)) {
            foreach ($roles as $role) {
                if ($this->hasRole($role)) {
                    return true;
                }
            }
        } else {
            if ($this->hasRole($roles)) {
                return true;
            }
        }
        return false;
    }









}
