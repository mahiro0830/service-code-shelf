<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    /**
     * ログインのための処理
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        // リクエストからemailとpasswordを取得
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $token = $user->createToken('auth_token')->plainTextToken;

            return response()->json(['token' => $token], 200);
        }

        // ログインに失敗した場合
        return response()->json(['message' => $credentials], 401);
    }

    /**
     * ログアウトのための処理
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout(Request $request)
    {
        {
            $request->user()->currentAccessToken()->delete();

            return response()->json(['message' => 'Logged out'], 200);
        }
    }
}
