<!DOCTYPE html>
<html lang="ja">
    <head>
        <meta charset="utf-8">
        <title>Index</title>
        <style>
        th{background-color: green; color: #fff; padding: 10px;}
        td{ background-color: #eee; padding: 10px; }
        </style>
    </head>
    <body>
        <h1>Hello/Index</h1>
        <p>{!!$msg!!}</p>

        <?php
            print_r($data);
        ?>
        <ul>
        @foreach($data as $item)
        <li>{!!$item!!}
        @endforeach
        </ul>

        <form action="/hello/other" method="post" 
            enctype="multipart/form-data">
            @csrf
            <input type="file" name="file">
            <input type="submit">
        </form>
    </body>
</html>