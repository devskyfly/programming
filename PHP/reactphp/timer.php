<?php
require_once(__DIR__."/vendor/autoload.php");

use React\Socket\Server as SocketServer; 
use React\Http\Server; 
use React\Http\Response; 
use React\EventLoop\Factory; 
use Psr\Http\Message\ServerRequestInterface;


// init the event loop 
$loop = Factory::create(); 

$loop->addPeriodicTimer(5, function(){
    echo (new \DateTime())->format(\DateTime::ATOM).PHP_EOL;
});

$loop->run();