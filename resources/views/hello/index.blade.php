<!DOCTYPE html>
<html lang="ja">
    <head>
        <meta charset="utf-8">
        <title>Index</title>
        <link href="/css/app.css"  rel="stylesheet">

    </head>
    <body>
        <h1>Hello/Index</h1>
        <p>{{$msg}}</p>
        <ol>
        @foreach($data as $item)
        <li>{{$item->name}} [{{$item->mail}}, 
            {{$item->age}}]</li>
        @endforeach
        </ol>
        <hr>
        {!! $data->links() !!}
    </body>

</html>