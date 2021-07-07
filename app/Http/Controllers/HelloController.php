<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Person;
use App\Http\Pagination\MyPaginator;
use App\Jobs\MyJob;
use Illuminate\Support\Facades\Storage;
use App\Events\PersonEvent;

class HelloController extends Controller
{


    public function index()
    {
        $data = [
            'msg' => 'This is Vue.js application.',
        ];
        return view('hello.index', $data);
    }

}

