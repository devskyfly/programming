
var global = "global val";

function usageGl() {
    console.log("Start fnc usageGl:");
    console.log("global variable:", global);
    console.log("End fnc usageGl\r\n");
}

function usageLcl() {
    console.log("Start fnc usageLcl:");
    var global = "local val";
    console.log("local varible:", global);
    console.log("End fnc usageLcl\r\n");
}

function usageLet()
{
    console.log("Start fnc usageLet:");
    let a = 1;

    if (true) {
        a = a + 1;
        let b = 3;
    }

    console.log(a);
    
    try {
        console.log(b);
    } catch (e) {
        console.log(e.message);
    }
    console.log("End fnc usageLet\r\n");
}

usageGl();
usageLcl();
usageLet();