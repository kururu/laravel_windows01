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
        //print_r($data[0]);

        echo "<br>";
        echo "要素の数: ".count($data);
        echo "<br>";

        $data01 = array_msort($data, array('id'=>SORT_DESC));

        //print_r($data01[0]);

        foreach($data01 as $item){
            echo $item->id;
            echo $item->all_data;
            echo "<br>";
        }
        echo "<br>";

        //https://www.php.net/manual/ja/function.array-multisort.php
        function array_msort($array, $cols)
        {
            $colarr = array();
            foreach ($cols as $col => $order) {
                $colarr[$col] = array();
                foreach ($array as $k => $row) { $colarr[$col]['_'.$k] = strtolower($row[$col]); }
            }
            $eval = 'array_multisort(';
            foreach ($cols as $col => $order) {
                $eval .= '$colarr[\''.$col.'\'],'.$order.',';
            }
            $eval = substr($eval,0,-1).');';
            eval($eval);
            $ret = array();
            foreach ($colarr as $col => $arr) {
                foreach ($arr as $k => $v) {
                    $k = substr($k,1);
                    if (!isset($ret[$k])) $ret[$k] = $array[$k];
                    $ret[$k][$col] = $array[$k][$col];
                }
            }
            return $ret;

        }
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
        <table class="table table-striped" style="width: 500px;">
        @foreach($data as $item)
        <tr>
            <th class="bg-primary table-dark" style="width: 10%">{{$item->id}}</th>
            <td>{{$item->all_data}}</td>
        </tr>
        @endforeach
        </table>
        <table class="table table-striped pt-3" style="width: 500px;">
        @foreach($data01 as $item)
        <tr>
            <th class="bg-primary table-dark" style="width: 10%">{{$item->id}}</th>
            <td>{{$item->all_data}}</td>
        </tr>
        @endforeach
        </table>
    </div>
</body>
</html>