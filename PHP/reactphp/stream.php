<?php
require_once(__DIR__."/vendor/autoload.php");

use React\Socket\Server as SocketServer; 
use React\Http\Server; 
use React\Http\Response; 
use React\EventLoop\Factory; 
use Psr\Http\Message\ServerRequestInterface;
use React\Stream\ReadableResourceStream;

// init the event loop 
$loop = Factory::create(); 

// set up the components 
$server = new Server( 
  function (ServerRequestInterface $request) use ($loop) { 
    $video = new ReadableResourceStream( 
      fopen('movie.mp4', 'r'), $loop 
    ); 

    return new Response( 
      200, ['Content-Type' => 'video/mp4'], $video 
    ); 
}); 

$socket = new SocketServer('127.0.0.1:8000', $loop); 

$server->listen($socket); 

echo 'Listening on ' 
  . str_replace('tcp:', 'http:', $socket->getAddress()) 
  . "\n"; 

// run the application 
$loop->run();