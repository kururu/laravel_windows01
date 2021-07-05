<?php

namespace App\Http\Controllers;
use App\Person;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class HelloController extends Controller
{
    public function index(Request $request, Response $response)
    {
        $msg = 'please input text:';
        $keys = [];
        $values = [];
        if ($request->isMethod('post'))
        {
            $form = $request->only(['name', 'mail']);
            $keys = array_keys($form);
            $values = array_values($form);
            $data = [
                'msg'=>'you inputted.',
                'keys'=>$keys,
                'values'=>$values,
            ];
            return view('hello.index', $data);
        }
        $data = [
            'msg'=> $msg,
            'keys'=>$keys,
            'values'=>$values,
        ];
        return view('hello.index', $data);
    }



}
