<?php
/**
 * Undocumented class
 */
class A
{
    public $val="#A#";
    public function work()
    {
        echo 'A::print '.$this->val.PHP_EOL; 
    }
}

class B extends A
{
    public $val="#B#";
    public function work()
    {
       echo 'B::print '.$this->val.PHP_EOL; 
    }
}

class C extends B
{
    public $val="#C#";
    public function work()
    {
        echo 'C::print '.$this->val.PHP_EOL;
    }
}

class D extends C
{
    public $val="#D#";
    public function work()
    {
       A::work();
    }
}

$a=new A();
$b=new B();
$c=new C();
$d=new D();

echo PHP_EOL;
$a->work();
$b->work();
$c->work();
$d->work();
?>