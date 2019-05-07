<?php
class A
{
    public function doStatic()
    {
        static::work();
    }
    
    public function doSelf()
    {
        self::work();
        //$this->work();
    }
    
    public function work()
    {
        echo 'A::print'.PHP_EOL; 
    }
}

class B extends A
{
    public function work()
    {
       echo 'B::print'.PHP_EOL; 
    }
}

class C extends B
{
    public function work()
    {
        echo 'C::print'.PHP_EOL;
    }
}

$a=new A();
$b=new B();
$c=new C();

echo "Self".PHP_EOL;
$a->doSelf();
$b->doSelf();
$c->doSelf();

echo "Static".PHP_EOL;
$a->doStatic();
$b->doStatic();
$c->doStatic();

?>