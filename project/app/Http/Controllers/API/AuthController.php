<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Interfaces\UserInterface;
use App\Http\Resources\UserResource;
use App\Http\Requests\UserRequest;

class AuthController extends Controller
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
 	 * Register new user 
 	 *
 	 * @param   App\Http\Requests\UserRequest $request 
 	 * @return  App\Http\Resources\UserResource
 	 */
    public function register(UserRequest $request)
    {

    	$user = $this->user->create($request);

        return response()->json( [
        	"message" => __("success.register"),
        	"data" => new UserResource($user)
        ]);
    }

 	/**
 	 * Login user by email|phone and Password
 	 *
 	 * @param  Illuminate\Http\Request $request 
 	 * @return Illuminate\Http\Response
 	 */
    public function login(Request $request)
    {

    	$validated = $request->validate([
	    		"username" => "required",
	    		"password" => "required"
	    	]);

        $field = filter_var($request->username, FILTER_VALIDATE_EMAIL) ? 'email' : 'phone';

        if (!auth()->attempt([
                    $field     => $request->username, 
                    'password' => $request->password  
                ]))
        {
            return response()->json([
            	"error"   => 401,
            	"message" => __("error.login") 
            ], 401);
        }

        // Create access token 
        $token = auth()->user()->createToken('User Access Token');

        return response()->json([
        	"message" => __("success.login"),
        	'token' => $token->accessToken
        ]);
    }
}