<?php
namespace devskyfly;

class Container
{
    public $list = [];

    public function add(Item $item)
    {
        $this->list[] = $item;
    } 
}