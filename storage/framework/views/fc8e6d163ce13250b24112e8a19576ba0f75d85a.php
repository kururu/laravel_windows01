<!DOCTYPE html>
<html lang="ja">
    <head>
        <meta charset="utf-8">
        <title>Index</title>
    </head>
    <body>
        <h1>Hello/Index</h1>
        <p><?php echo $msg; ?></p>
        <ul>
        <?php $__currentLoopData = $data; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <li><?php echo $item; ?></li>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </ul>
    </body>

</html><?php /**PATH C:\xampp\htdocs\lara01_git\laravel_windows01\resources\views/hello/index.blade.php ENDPATH**/ ?>