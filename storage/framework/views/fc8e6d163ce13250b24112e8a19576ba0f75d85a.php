<!doctype html>
<html lang="ja">
<head>
    <title>Index</title>
    <link href="<?php echo e(mix('css/app.css')); ?>" 
        rel="stylesheet" type="text/css">
    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">
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
        <?php
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
        <?php $__currentLoopData = $data; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <tr>
            <th class="bg-primary table-dark" style="width: 10%"><?php echo e($item->id); ?></th>
            <td><?php echo e($item->all_data); ?></td>
        </tr>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </table>
        <table class="table table-striped pt-3" style="width: 500px;">
        <?php $__currentLoopData = $data02; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <tr>
            <th class="bg-primary table-dark" style="width: 10%"><?php echo e($item['id']); ?></th>
            <td><?php echo e($item['name']); ?></td>
        </tr>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </table>
    </div>


    <div id="app">
        <example-component></example-component>
    </div>
    <script src="<?php echo e(mix('js/app.js')); ?>"></script>
    <br>
    <br>
</body>
</html><?php /**PATH C:\xampp\htdocs\lara01_git\laravel_windows01\resources\views/hello/index.blade.php ENDPATH**/ ?>