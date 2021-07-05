<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\MyClasses\PowerMyService;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //

        app()->singleton('myservice',
            'App\MyClasses\PowerMyService');

    }
}
