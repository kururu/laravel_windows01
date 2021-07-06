<!doctype html>
<html lang="ja">
<head>
    <title>Index</title>
    <link href="/css/app.css"  rel="stylesheet">
    <style type="text/css">
        .myjob{
            color: #ffffff;
            padding-left: 1rem;
            background-color: #666;
        }
    </style>
</head>
<body>
    <div class="pl-3 pt-3">
        <h1>Hello/Index</h1>
        <p>{{$msg}}</p>
        <div>
        <form action="/hello" method="post">
            @csrf
            ID: <input type="text" id="id" name="id">
            <input type="submit">
        </form>
        </div>
        <hr>
        {{$msg}}
        <table class="table table-striped" style="width: 500px;">
        <?php

        print_r($data);
/*
            $json_search = "$data";
            $array_search = json_decode( $json_search,true ) ;
            sort($array_search);

            for($i = 0; $i < count($array_search); ++$i) {
                echo $array_search[$i]['id']." : ";
                echo $array_search[$i]['name']." : ";
                echo $array_search[$i]['mail']." : ";
                echo $array_search[$i]['age'];
                echo "<br>";
            }
            echo "<br>";
            */
        ?>
        @foreach($data as $item)
        <tr>
            <th class="bg-primary table-dark" style="width: 10%">{{$item->id}}</th>
            <td>{{$item->all_data}}</td>
        </tr>
        @endforeach
        </table>
    </div>
</body>
</html>