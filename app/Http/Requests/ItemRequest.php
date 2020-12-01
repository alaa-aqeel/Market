<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ItemRequest extends FormRequest
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
                    'title' => "string|unique:items|required",
                    'price' => "numeric|required",
                    'short_descrip' => "string|required",
                    'discount' => "string|nullable",
                    'description' => "string|nullable",
                    'images'   => 'required',
                    'images.*' => 'image|mimes:jpeg,png,jpg,gif,svg',
                ];
            }
            case 'PUT':
            case 'PATCH':
            {   
                $itemid = $this->route()->parameter('item');
                return [
                    'title' => "string|unique:items,title,".$itemid,
                    'price' => "numeric",
                    'short_descrip' => "string",
                    'discount' => "string|nullable",
                    'description' => "string|nullable",
                    'images.*' => 'image|mimes:jpeg,png,jpg,gif,svg',
                ];
            }
            default:break;
        }
    }
}
