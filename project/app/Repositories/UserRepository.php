<?php 

namespace App\Repositories;

use Illuminate\Http\Request;
use App\Interfaces\UserInterface;
use App\Http\Requests\UserRequest;
use Illuminate\Support\Facades\Hash;
use App\Models\Role;
use App\Models\User;



class UserRepository implements UserInterface
{

	/**
	 * Update user password 
	 *
	 * @param    App\Models\User $user 
	 * @param    string  $pass 
	 * @return void
	 */
	private function updatePassword(User $user, $pass)
	{
		if (!is_null($pass)){

			$user->password = Hash::make($pass);
			$user->save();
		}	
	}

	private function getRoleByName($name)
	{
		return Role::where('name', $name)->first();
	}

	/**
	 * Get All users 
	 *
	 * @return App\Models\User
	 */
	public function all()
	{
		return $this->getRoleByName('user')->users();
	}

	/**
	 * Get user by id 
	 *
	 * @param  int $id 
	 * @return App\Models\User
	 */
	public function get($id)
	{
		return User::find($id);
	}

	/**
	 * Creae new user 
	 *
	 * @param  App\Http\Requests\UserRequest $request
	 * @return App\Models\User
	 */
	public function create(UserRequest $request)
	{
		$user = $this->getRoleByName('user')
					->users()
					->create($request->validated());

		$this->updatePassword($user, $request->password);
		return $user;
	}

	/**
	 * Update user 
	 *
	 * @param  App\Http\Requests\UserRequest $request
	 * @param  int $id
	 * @return App\Models\User
	 */
	public function update(UserRequest $request, $id)
	{
		$user = $this->get($id);

		$user->update($request->validated());
		$this->updatePassword($user, $request->password);
		
		return $user;
	}
}