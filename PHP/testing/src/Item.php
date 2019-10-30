<?php
namespace devskyfly;

class Item
{
    public $value = "none";

    public function __construct($value = null)
    {
        if ($value) {
           $this->value = $value; 
        }
    }

    public function action()
    {
        return "action";
    }

    public function getValue()
    {
        return $this->value;
    }
}