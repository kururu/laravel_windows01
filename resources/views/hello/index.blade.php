<!DOCTYPE html>
<html lang="ja">
    <head>
        <meta charset="utf-8">
        <title>Index</title>
        <link href="/css/app.css"  rel="stylesheet">

    </head>
    <body>
        <div class="container pt-3">
            <h1>Hello/Index</h1>
            <p>{{$msg}}</p>
            <table class="table table-striped" border="0" style="border-collapse: collapse;">
            @foreach($data as $item)
            <tr>
                <th class="bg-primary table-dark" style="width: 10%">{{$item->id}}</th>
                <td style="width: 90%">{{$item->name_and_age}}</td>
            </tr>
            @endforeach
            </table>
        </div>
    </body>

</html>