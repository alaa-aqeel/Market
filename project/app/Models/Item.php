<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
		'title',
		'price',
		'short_descrip',
		'discount',
		'description',
        'active',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
       	'user_id',
		'guest_id',
        'active'
    ];

    /**
     * Get the user that owns the item.
     *
     */
    public function user(){

        return $this->belongsTo("App\Models\User");
    }


    /**
     * Get the guest that owns the item.
     *
     */
    public function guest(){

        return $this->belongsTo("App\Models\Guest");
    }

    /**
     * Get the items for the user.
     *
     */
    public function images(){

        return $this->hasMany("App\Models\Images");
    }
}
