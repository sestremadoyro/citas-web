<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;
use App\Exceptions\CustomException;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array<int, class-string<Throwable>>
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }

    public function render($request, Throwable $e)
    {
        #dd("hola",$e->getStatusCode());
        
        if ($this->isHttpException($e)) {
            $errorCode = $e->getStatusCode();
            //$message = "Hubo un error. Por favor Comunicate con el administrador.";
            $message = $e->getMessage();
            if ($errorCode == '403'){
                #$message = "Hubo un error. Comunicate con el administrador";
            }
            if ($errorCode == '404'){
                $message = "Pagina no encontrada";
            }
            if ($errorCode == '419'){
                $message = "Pagina no encontrada";
            }
            if ($errorCode == '500'){
                $message = "Hubo un error. Por favor Comunicate con el administrador";
            }
            return \Response::view('error',compact('message','errorCode'),$errorCode);
        } else {
            
            if (config('app.debug')) {
                return parent::render($request, $e);
            }else{
                return abort(500, 'custom error');
            }
            
        }
    }
}
