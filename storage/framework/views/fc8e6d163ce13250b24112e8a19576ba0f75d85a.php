<!doctype html>
<html lang="ja">
<head>
    <title>Index</title>
    <link href="<?php echo e(mix('/css/app.css')); ?>" 
            rel="stylesheet" type="text/css">
    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">
</head>
<body style="padding:10px;">
    <h1>Hello/Index</h1>
    <p><?php echo e($msg); ?></p>


    <app-my></app-my>
    
    <script src="<?php echo e(mix('/js/app.js')); ?>"></script>
</body>
</html> <?php /**PATH C:\xampp\htdocs\lara01_git\laravel_windows01\resources\views/hello/index.blade.php ENDPATH**/ ?>