<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Person;
use App\Http\Pagination\MyPaginator;

class HelloController extends Controller
{


    public function index()
    {
        $msg = 'show people record.';
        $result = Person::get();
        
        $data = [
            'input' => '',
            'msg' => $msg,
            'data' => $result,
        ];
        return view('hello.index', $data);
    }


    public function send(Request $request)
    {
        $input = $request->input('find');
        $msg = 'search: ' . $input;
        $result = Person::search($input)->get();

        $data = [
            'input' => $input,
            'msg' => $msg,
            'data' => $result,
        ];
        return view('hello.index', $data);
    }


}

