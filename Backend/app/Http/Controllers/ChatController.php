<?php

namespace App\Http\Controllers;

use App\Events\Message;
use Illuminate\Http\Request;

class ChatController extends Controller
{
    public function message(Request $request)
    {
        $username = $request->username;
        $message = $request->message;
        event(new Message($username, $message));

        return [];
    }
}
