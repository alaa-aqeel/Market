<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Interfaces\UserInterface;
use App\Http\Resources\UserResource;
use App\Http\Requests\UserRequest;

class ProfileController extends Controller
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
 	function __construct(UserInterface $user)
 	{
 		$this->user = $user;
 	}

    /**
     * Display a listing of the resource.
     * 
     * @return App\Http\Resources\UserResource
     */
 	public function index()
 	{
 		return new UserResource(auth()->user());
 	}

    /**
     * Update the specified resource in storage.
     *
     * @param  App\Http\Requests\UserRequest  $request
     * @return \Illuminate\Http\Response
     */
 	public function update(UserRequest $request)
 	{

        $user = $this->user->update($request, auth()->user()->id);
         
 		return response()->json([
 			'message' => __("success.update"),
 			'data'   => new UserResource($user)
 		]);
 	}
}
