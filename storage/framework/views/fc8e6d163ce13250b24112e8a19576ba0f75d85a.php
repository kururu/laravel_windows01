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
        <p><?php echo e($msg); ?></p>
        <div>
        <form action="/hello" method="post">
            <?php echo csrf_field(); ?>
            ID: <input type="text" id="id" name="id">
            <input type="submit">
        </form>
        </div>
        <hr>
        <table class="table table-striped" style="width: 500px;">
        <?php

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
        ?>
        <?php $__currentLoopData = $data; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <tr>
            <th class="bg-primary table-dark" style="width: 10%"><?php echo e($item->id); ?></th>
            <td><?php echo e($item->all_data); ?></td>
        </tr>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </table>
    </div>
</body>
</html><?php /**PATH C:\xampp\htdocs\lara01_git\laravel_windows01\resources\views/hello/index.blade.php ENDPATH**/ ?>