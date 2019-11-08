
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

function usageBlock()
{
    console.log("Start fnc usageBlock:");
    {
        let a = "a val";
    }
    try {
        console.log(a);
    } catch (e) {
        console.log(e.message);
    }
    console.log("End fnc usageBlock\r\n");

}

usageLet();
usageBlock();