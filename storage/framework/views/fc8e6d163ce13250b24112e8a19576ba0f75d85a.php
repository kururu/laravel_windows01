<!doctype html>
<html lang="ja">
<head>
    <title>Index</title>
    <link href="/css/app.css"  rel="stylesheet">
</head>
<body>
    <h1>Hello/Index</h1>
   <p><?php echo e($msg); ?></p>
    <div>
    <form action="/hello" method="post">
        <?php echo csrf_field(); ?>
        <input type="text" id="find" name="find" 
            value="<?php echo e($input); ?>">
        <input type="submit">
    </form>
    </div>
    <hr>
    <table border="1">
    <?php $__currentLoopData = $data; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
    <tr>
        <th><?php echo e($item->id); ?></th>
        <td><?php echo e($item->all_data); ?></td>
    </tr>
    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
    </table>
    <hr>
</body>


</html><?php /**PATH C:\xampp\htdocs\lara01_git\laravel_windows01\resources\views/hello/index.blade.php ENDPATH**/ ?>