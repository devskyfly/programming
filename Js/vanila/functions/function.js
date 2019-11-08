/*
Function is object and have this link.
*/

function fn1()
{
    console.log("Start fn1 usageLcl:");
    console.log(this);
    console.log("End fn1 usageLcl\r\n");
}

function fn2(callback)
{
    console.log("Start fn2 usageLcl:");
    this.a = "a val";
    this.callback = callback;
    console.log("End fn2 usageLcl\r\n");
    return this;
}


var callback = function() {
    console.log(this.a);
}

fn1();
var obj = fn2(callback);
obj.callback();