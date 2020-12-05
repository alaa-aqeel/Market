<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Interfaces\UserInterface;
use App\Http\Resources\UserResource;
use App\Http\Requests\UserRequest;

class UserController extends Controller
{

    /**
     * @var App\Interfaces\ItemInterface
     */
    private $user; 

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    function __construct(UserInterface $userInterface)
    {
        $this->user = $userInterface;
        
    }

    /**
     * Display a listing of the users.
     *
     * @return App\Http\Resources\UserResource
     */
    public function index()
    {
       return UserResource::collection(
                $this->user->all()->paginate(8)
            );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  App\Http\Requests\UserRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(UserRequest $request)
    {
        
        $user = $this->user->create($request);

        return response()->json([
            'message' => "success.create",
            'data'    => new UserResource($user)
        ]);
    }

    /**
     * Display the specified user.
     *
     * @param  int  $id
     * @return App\Http\Resources\UserResource
     */
    public function show($id)
    {
        return new UserResource($this->user->get($id));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  App\Http\Requests\UserRequest  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UserRequest $request, $id)
    {

        if (!$this->user->get($id))
        {   
            return response()->json([
                    'error'   => 404,
                    'message' => __("notfound")
                ], 404);
        }

        $user = $this->user->update($request, $id);

        return response()->json([
            'message' => __('success.update'),
            'data'    => new UserResource($user)
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Illuminate\Http\Request $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request,$id)
    {
        
        $user = $this->user->get($id);

        if (!$user)
        {   
            return response()->json([
                    'error'   => 404,
                    'message' => __("notfound")
                ], 404);
        }

        $user->delete();

        return response()->json([
                'message' => __('success.delete'),
                'data'    => ['id' => $id]
            ]);
    }
}
