<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\Role;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Role::where("name", "admin")
        	->first()
        	->users()
        	->create([
        		"name"  => "Admin",
        		"email" => "admin@email.com",
        		"password" => Hash::make("12345678"),
        		"phone" => "09901234567",
        		"active" => 1
        	]);
    }
}
