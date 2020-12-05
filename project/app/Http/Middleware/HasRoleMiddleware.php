<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class HasRoleMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string  $rolename
     * @return mixed
     */
    public function handle(Request $request, Closure $next, $rolename)
    {
        if(!auth()->user()->hasRole($rolename)){
            return response()->json([
                "message" => "Access denied"
            ], 403);
        }

        return $next($request);
    }
}
