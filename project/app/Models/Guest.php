<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Guest extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        "name",
        "phone",
    	"ip_address",
		"session_id"
    ];

    /**
     * Get the items for the user.
     *
     */
    public function items(){

        return $this->hasMany("App\Models\Item");
    }
}
