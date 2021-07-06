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
        <p><?php echo e($msg); ?></p>
        <table class="table table-striped" border="0" style="border-collapse: collapse;">
        <?php $__currentLoopData = $data; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <tr>
            <th class="bg-primary table-dark" style="width: 10%"><?php echo e($item->id); ?></th>
            <td style="width: 90%"><?php echo e($item->name_and_age); ?></td>
        </tr>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </table>
        </div>
    </body>

</html><?php /**PATH C:\xampp\htdocs\lara01_git\laravel_windows01\resources\views/hello/index.blade.php ENDPATH**/ ?>