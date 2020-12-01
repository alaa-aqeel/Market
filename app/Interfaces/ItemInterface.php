<?php 

namespace App\Interfaces;

use Illuminate\Http\Request;
use App\Http\Requests\ItemRequest;
use App\Models\Item;


interface ItemInterface
{
	/**
	 * Get All items 
	 *
	 * @return App\Models\Item
	 */
	public function items();

	/**
	 * Get item by id 
	 *
	 * @param  int $id 
	 * @return App\Models\Item
	 */
	public function getOrfail($id);

	/**
	 * filter item by title
	 * 
	 * @param  string $query 
	 * @return App\Models\Item
	 */	
	public function filter($query);


	/**
	 * Creae new item 
	 *
	 * @param  App\Http\Requests\ItemRequest $request
	 * @return App\Models\Item
	 */
	public function create(ItemRequest $request);

	/**
	 * Update item 
	 *
	 * @param  App\Http\Requests\ItemRequest $request
	 * @param  int $id
	 * @return App\Models\Item
	 */
	public function update(ItemRequest $request, $id);
}