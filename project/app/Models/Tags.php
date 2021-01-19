<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tags extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
		'name',
    ];

    /**
     * The items that belong to the tag.
     */
    public function items()
    {
        return $this->belongsToMany(Itme::class, 'tag_item', 'tag_id', 'item_id');
    }
}
