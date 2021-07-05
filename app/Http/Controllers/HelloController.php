<?php

namespace App\Http\Controllers;
use App\Person;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class HelloController extends Controller
{
    public function index(Request $request)
    {
        $msg = 'please input text:';
        if ($request->isMethod('post'))
        {
            $msg = 'you typed: "' . $request->input('msg') . '"';
        }
        $data = [
            'msg'=> $msg,
        ];
        return view('hello.index', $data);
    }
}
