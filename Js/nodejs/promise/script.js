console.log('Start');

var counter=0;

class Ajax
{
    sendRequest()
    {
        let promise = new Promise(function (resolve, reject) {
            counter++;
            setTimeout(resolve(counter),1000);
        });

        return promise;
    } 
}

var Rates=null;

let aj = new Ajax();
let promise = aj.sendRequest();

promise.then(function (result) { 
    Rates=result;
    console.log(result);
    let aj = new Ajax();
    return aj.sendRequest();
})
.then(function (result) { 
    console.log(result);
    let aj = new Ajax();
    return aj.sendRequest();
})
.then(function (result) { 
    console.log(result);
    let aj = new Ajax();
    return aj.sendRequest();
})
.then(function (result) { 
    console.log(result);
    let aj = new Ajax();
    return aj.sendRequest();
})
.then(function (result) { 
    console.log(result);
    let aj = new Ajax();
    return aj.sendRequest();
})
.then(function (result) { 
    console.log(result);
    let aj = new Ajax();
    return aj.sendRequest();
});
