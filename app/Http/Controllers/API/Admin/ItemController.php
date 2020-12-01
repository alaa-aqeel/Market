<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Interfaces\ItemInterface;
use App\Http\Resources\ItemResource;
use App\Http\Requests\ItemRequest;
use App\Models\Item;

class ItemController extends Controller
{

    /**
     * @var App\Interfaces\ItemInterface
     */
    private $item; 

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    function __construct(ItemInterface $itemInterface, Item $item)
    {

        $this->item = $itemInterface->init($item);
    }

    /**
     * Display a listing of the resource.
     * 
     * @param  Illuminate\Http\Request  $request
     * @return App\Http\Resources\ItemResource
     */
    public function index(Request $request)
    {
        $items = $this->item->filter($request->q)->paginate();
        
        return ItemResource::collection($items);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  App\Http\Requests\ItemRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ItemRequest $request)
    {
        $item = $this->item->create($request);

        return response()->json([
                'message' => __("success.created"),
                "data"    => new ItemResource($item)
            ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return App\Http\Resources\ItemResource;
     */
    public function show($id)
    {

        $item = $this->item->getOrfail($id);

        return new ItemResource($item);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  App\Http\Requests\ItemRequest  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ItemRequest $request, $id)
    {
        $item = $this->item->update($request, $id);

        return response()->json([
                'message' => __("success.update"),
                "data"    => new ItemResource($item)
            ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $item = $this->item->delete($id);

        return response()->json([
                'message' => __("success.delete"),
                "data"    => ['id' => $id]
            ]);
    }
}
