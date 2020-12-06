<?php 

namespace App\Repositories;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Interfaces\ItemInterface;
use App\Http\Requests\ItemRequest;
use App\Models\Guest;
use App\Models\Images;
use App\Models\Item;



class ItemRepository implements ItemInterface
{

	private $item;

	public function init($item)
	{
		$this->item = $item;
		return $this;
	}

	/**
	 * Set userid for guest id 
	 *
	 * @return void
	 */	
	private function setUserOrGuest(Item $item, $request)
	{
		if ($user = Auth::user()){

			$user->items()->save($item);
		} else {

			$guest = Guest::create([
				
		        "name" => $request->name, 
		        "phone" => $request->phone,
		    	"ip_address" => \Request::getClientIp(),
			]);

			$guest->items()->save($item);
		}
	}

	/**
	 * update images
	 *
	 * @return void
	 */	
	private function uploadImages(Item $item, $images)
	{
		if ($images){
			foreach ($images as $image) {

            	$path = $image->store('public');
	            $image = Images::create([
	                'name'  => preg_replace("/public/", '', $path )
	            ]);

	            $item->images()->save($image);
	        }
		}	
	}

	/**
	 * Get All items 
	 *
	 * @return App\Models\Item
	 */
	public function items()
	{
		return $this->item->with([
				"images"=> function($query){
					$query->select("name");
				},
				'user'=> function($query){
					
					$query->select('id', "name", 'phone');
				},
				'guest' => function($query){
					$query->select('id', "name", 'phone');
				}
			]);
	}

	/**
	 * Get item by id or 
	 *
	 * @param  int $id 
	 * @return App\Models\Item
	 */
	public function getOrfail($id)
	{	
		$item = $this->items()->find($id);
		if (!$item){
			abort( response()->json([
                "message" => __("notfound")
            ], 404) );
		}

		return $item;
	}

	/**
	 * filter item by title
	 * 
	 * @param  string $query 
	 * @return App\Models\Item
	 */	
	public function filter($query)
	{
		return $this->items()
				->where('title', 'like', "%$query%");
	}

	/**
	 * Creae new item 
	 *
	 * @param  App\Http\Requests\ItemRequest $request
	 * @return App\Models\Item
	 */
	public function create(ItemRequest $request)
	{
		$item = Item::create($request->validated());
		$this->setUserOrGuest($item, $request);
		$this->uploadImages($item, $request->images);

		return $this->items()->find($item->id);
	}

	/**
	 * Update item 
	 *
	 * @param  App\Http\Requests\ItemRequest $request
	 * @param  int $id
	 * @return App\Models\Item
	 */
	public function update(ItemRequest $request, $id)
	{
		$item = $this->getOrfail($id);
		$item->update($request->validated());
		$item->images()->delete();
		$this->uploadImages($item, $request->images);

		return $this->items()->find($item->id);
	}

	/**
	 * Delete item 
	 *
	 * @param  int $id
	 * @return void
	 */
	public function delete($id)
	{
		$item = $this->getOrfail($id);
		$item->images()->delete();
		$item->delete();
	}
}