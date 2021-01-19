<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\ProfileController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// `Register` 
Route::post("register", [AuthController::class, 'register'])
		->name("user.register")
		->middleware("guest");

// `Login`   
Route::post("login", [AuthController::class, 'login'])
		->name("login")
		->middleware("guest");


# AUTH		
Route::group(["middleware"=> ["auth:api"], "prefix" => "user"],function(){
	
	Route::get("profile",[ProfileController::class, "index"]);
	Route::put("profile",[ProfileController::class, "update"]);
	Route::apiResource("items", "API\ItemUserController");
	Route::post('logout', function () {
		
		\Auth::user()->token()->revoke();
		return response()->json(['message' => __("success.logout")]);
	});
});

# Admin 
Route::group(["middleware"=> ["auth:api", "role:admin"], "prefix" => "admin"], function(){

	Route::apiResource("users", "API\Admin\UserController");
	Route::apiResource("items", "API\Admin\ItemController");
});

Route::apiResource("items", "API\Admin\ItemController")
			->only(["store", "index", "show"])
			->middleware("guest");