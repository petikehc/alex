<?php

// Define path to application directory
defined('APPLICATION_PATH')
	|| define('APPLICATION_PATH', realpath(dirname(__FILE__) . '/../spotify-timeshift/build/application'));

define('APPLICATION_ENV', 'staging');


// Ensure library/ is on include_path
set_include_path(implode(PATH_SEPARATOR, array(
	realpath(APPLICATION_PATH . '/../library'),
	get_include_path(),
)));

error_reporting(E_ALL);
ini_set('display_errors', 1);

date_default_timezone_set('Europe/London');

// Create application, bootstrap, and run
require_once 'Zend/Application.php';
$application = new Zend_Application(
	APPLICATION_ENV,
	APPLICATION_PATH . '/configs/application.ini'
);

Zend_Loader_Autoloader::getInstance()->setFallbackAutoloader(true);

$application->bootstrap(array('config'));

$config = Zend_Registry::get('config');

$alexjs = dirname(__FILE__) . '/alex.js';
$cmd = APPLICATION_PATH . "/../library/phantomjs/bin/$config->phantomjsbin --disk-cache=false $alexjs";

$out = `$cmd`;
$tmp = tempnam('/tmp/', 'alex-');
file_put_contents($tmp, $out);

$s3Url = 'https://s3.amazonaws.com/alexalexalex/alex';

$config->amazon->s3->bucket = 'alexalexalex';
$s3 = new Spotify_Service_Storage_S3($config);
$s3->copy($tmp, 'alex', 'text/plain');
