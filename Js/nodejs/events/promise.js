var pr = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve(1);
    }, 1000);
});

pr.then(function(result){console.log(1,result); return result;})
.then(function(result){console.log(2,result)});