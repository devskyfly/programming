<?php

use devskyfly\Container;
use devskyfly\Item;
use devskyfly\NotItem;
use devskyfly\php56\types\Obj;

class ContainerCest
{
    public function _before(UnitTester $I)
    {
    }

    public function _after(UnitTester $I)
    {
    }

    // tests
    public function tryToTest(UnitTester $I)
    {
        $item = \Codeception\Stub::make(Item::class);
        $notItem = \Codeception\Stub::make(NotItem::class);
        
        $container = new Container();
        $container->add($item);
        $I->expectThrowable(\Exception::class, function(){
            $container->add($notItem);
        });
    }

    public function testStub(UnitTester $I)
    {
        $item = \Codeception\Stub::make(Item::class);
        $I->assertEquals($item->getValue(), "none");
        $I->assertNotEquals($item->getValue(), "none1");

        $item = \Codeception\Stub::make(Item::class,["getValue"=>"replaced_none"]);
        $I->assertEquals($item->getValue(), "replaced_none");

        $item = \Codeception\Stub::makeEmpty(Item::class);
        $I->assertTrue(Obj::isA($item, Item::class));
        
        $item = \Codeception\Stub::construct(Item::class, ['value'=>"construct_none"]);
        $I->assertEquals($item->getValue(), "construct_none");
    }
}
