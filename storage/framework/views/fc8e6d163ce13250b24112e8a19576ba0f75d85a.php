<!DOCTYPE html>
<html lang="ja">
    <head>
        <meta charset="utf-8">
        <title>Index</title>
        <link href="/css/app.css"  rel="stylesheet">

    </head>
    <body>
        <h1>Hello/Index</h1>
        <p><?php echo e($msg); ?></p>
        <table class="table table-striped">
        <?php $__currentLoopData = $data; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <tr>
            <th><?php echo e($item->id); ?></th>
            <td><?php echo e($item->name); ?></td>
            <td><?php echo e($item->mail); ?></td> 
            <td><?php echo e($item->age); ?></td>
        </tr>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </table>
        <hr>
    </body>

</html><?php /**PATH C:\xampp\htdocs\lara01_git\laravel_windows01\resources\views/hello/index.blade.php ENDPATH**/ ?>