<!DOCTYPE html>
<html lang="ja">
    <head>
        <meta charset="utf-8">
        <title>Index</title>
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
    </body>
</html>