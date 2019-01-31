class A
{
	public do():void{
		this.work();
	}

	public work():void{
		console.log('A::work()');
	}
} 

class B extends A
{
	public work():void{
		console.log('B::work()');
	}
}

var a=new A();
var b=new B();

a.do();
b.do();