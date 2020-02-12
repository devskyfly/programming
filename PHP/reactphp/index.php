<?php
require_once(__DIR__."/vendor/autoload.php");

use React\Socket\Server as SocketServer; 
use React\Http\Server; 
use React\Http\Response; 
use React\EventLoop\Factory; 
use Psr\Http\Message\ServerRequestInterface;


// init the event loop 
$loop = Factory::create(); 

// set up the components 
$server = new Server( 
   function (ServerRequestInterface $request) { 
     $params = $request->getQueryParams();
     return new Response( 
       200, ['Content-Type' => 'text/plain'], "Hello world \n".print_r($params, true) 
     );
}); 

$socket = new SocketServer('127.0.0.1:8000', $loop); 

$server->listen($socket); 

echo 'Listening on ' 
  . str_replace('tcp:', 'http:', $socket->getAddress()) 
  . "\n";

// run the application 
$loop->run();