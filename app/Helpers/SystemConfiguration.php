<?php

namespace App\Helpers;
use Illuminate\Support\Facades\Storage;
use Aws\S3\S3Client;  
use Aws\Exception\AwsException;
use Carbon\Carbon;

class SystemConfiguration
{
    //General
    public const SEARCH_DEFAULT_PAGE = 1;
    public const PATH_AWS_FOLDER_CONTENT = "BANNER_CONTENT";
    public const PATH_AWS_FOLDER_SECTION = "BANNER_SECTION";
    public const PATH_AWS_FOLDER_WORKSHOP = "WORKSHOP";
    public const PATH_AWS_FOLDER_VEHICLES = "VEHICLES";
    public const COMPANY_NAME = 'RedAgileLatam';

    public static function getImageURL(){
        #$s3 =env('APP_ENV');
        //$s3 = Storage::disk('s3')->getAdapter()->getClient();
        $s3 = "https://".config('app.aws_bucket').".s3.".config('app.aws_region').".amazonaws.com";
        return $s3;
        //return "https://ontrack-dev.s3.amazonaws.com";
    }

    public const MAX_EXECUTION_TIME = 600;
    public const IMPORT_PRODUCT_FOLDER = "/app/Import/Product/";
}