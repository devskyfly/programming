function fnA()
{
    this.a = "a value";
    
    this.aFn = function()
    {
        console.log(this.a);
    }

    this.cns = function()
    {
        for (const key in this) {
            if (this.hasOwnProperty(key)) {
                const element = this[key];
                console.log(key);
            }
        }
        
    }
}

function fnB()
{
    this.b = "b value";
    this.bFn = function()
    {
        console.log(this.b);
    }

   return this;
}


var objA = fnA();
var objB = fnB();
objB.prototype = objA;

objB.aFn();
objB.bFn();
objB.cns();