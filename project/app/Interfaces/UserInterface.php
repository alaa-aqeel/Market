<?php 

namespace App\Interfaces;

use Illuminate\Http\Request;
use App\Http\Requests\UserRequest;
use App\Models\User;


interface UserInterface
{
	/**
	 * Get All users 
	 *
	 * @return App\Models\User
	 */
	public function all();

	/**
	 * Get user by id 
	 *
	 * @param  int $id 
	 * @return App\Models\User
	 */
	public function get($id);

	/**
	 * Creae new user 
	 *
	 * @param  App\Http\Requests\UserRequest $request
	 * @return App\Models\User
	 */
	public function create(UserRequest $request);

	/**
	 * Update user 
	 *
	 * @param  App\Http\Requests\UserRequest $request
	 * @param  int $id
	 * @return App\Models\User
	 */
	public function update(UserRequest $request, $id);
}