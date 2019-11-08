
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


usageGl();
usageLcl();
