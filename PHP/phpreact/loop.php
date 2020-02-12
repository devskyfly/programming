<?php
require __DIR__."/vendor/autoload.php";

$loop = React\EventLoop\Factory::create();
$ob = new Keeper();

$tm1 = $loop->addPeriodicTimer(0.1, function() use (&$ob){
    $time = new DateTime();
    $ob::increase();
    $strtime = $time->format("h:m:s");
    echo "Tick {$ob::$val} {$strtime}\n";
    sleep(3);
});

$loop->addSignal(SIGINT, function (int $signal) use ($loop) {
    $signal = (string)$signal;
    echo PHP_EOL."Caught user interrupt signal({$signal})".PHP_EOL;
    $loop->stop();
});

$loop->run();

class Keeper
{
    public static $val = 0;

    public static function increase()
    {
        static::$val++;
    }

    public static function decrease()
    {
        static::$val--;
    }

}