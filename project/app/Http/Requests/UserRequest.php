<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        switch($this->method())
        {
            case 'GET':
            case 'DELETE':
            {
                return [];
            }
            case 'POST':
            {
                return [
                    'name' => "required",
                    'phone' => "required|between:11,12|unique:users",
                    'email' => "required|email|unique:users",
                    'password' => "required|between:8,45",
                    'fb_page'  => 'string|nullable'
                ];
            }
            case 'PUT':
            case 'PATCH':
            {
                $userid = $this->route()->parameter('user') || auth()->user()->id;
                return [   
                        'name'  => "string",
                        'phone' => "between:11,12|unique:users,phone,".$userid,
                        'email' => "email|unique:users,email,".$userid,
                        // 'password' => "nullable|between:8,45",
                        'fb_page'  => 'string|nullable'
                    ];
            }
            default:break;
        }
    }
}
