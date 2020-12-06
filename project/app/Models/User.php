<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
class User extends Authenticatable
{
    use HasFactory, Notifiable, HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'phone',
        'fb_page',
        'active',
        'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'role_id',
        'password',  
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];


    /**
     * Get the role that owns the user.
     *
     */
    public function role(){

        return $this->belongsTo("App\Models\Role");
    }

    /**
     * Get the items for the user.
     *
     */
    public function items(){

        return $this->hasMany("App\Models\Item");
    }

    /**
     * Get the messages for the user.
     *
     */
    public function messages(){

        return $this->hasMany("App\Models\Message");
    }

    /**
     * Check user role by name
     *
     * @param  string   $name
     * @return Boolean
     */
    public function hasRole($name){


        return $this->role->name == $name;
    }

}
