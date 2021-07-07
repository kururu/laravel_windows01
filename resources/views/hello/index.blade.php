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
        
        <?php

        echo $msg;
        print_r($data[0]);

        echo "<br>";
        echo "要素の数: ".count($data);
        echo "<br>";

        $data01 = $data;
        $data02 = array();

        foreach($data01 as $item){
            //echo $item->id;
            //echo $item->all_data;
            //echo "<br>";
            $data02[$item->id]['id'] = $item->id;
            $data02[$item->id]['name'] = $item->name;
        }
        echo "<br>";

        print_r($data02);

        foreach ($data02 as $key => $value) {
            $sort[$key] = $value['id'];
        }
        array_multisort($sort, SORT_DESC, $data02);

        ?>
        <table class="table table-striped" style="width: 500px;">
        @foreach($data as $item)
        <tr>
            <th class="bg-primary table-dark" style="width: 10%">{{$item->id}}</th>
            <td>{{$item->all_data}}</td>
        </tr>
        @endforeach
        </table>
        <table class="table table-striped pt-3" style="width: 500px;">
        @foreach($data02 as $item)
        <tr>
            <th class="bg-primary table-dark" style="width: 10%">{{$item['id']}}</th>
            <td>{{$item['name']}}</td>
        </tr>
        @endforeach
        </table>
    </div>
</body>
</html>