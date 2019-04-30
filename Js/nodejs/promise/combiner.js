class Initiator
{
    initiate()
    {
        console.log(RatesRequest.value);
        console.log(ServicesRequest.value);
        console.log(StocksRequest.value);
    }
}

class StateContainer
{
    constructor()
    {
        this.list={
            rates:false,
            services:false,
            stocks:false
        };
    }

    checkStates()
    {
        var result=true;
        
        for(var key in this.list){
            result=result&&this.list[key];
        }

        return result;
    }
}

var stateContainer=new StateContainer();

class Request
{
    constructor()
    {
        this.name="",
        this.value=null;
    }

    send(){
        let self=this;
        let promise = new Promise(function(resolve,reject){
            var delay=Math.random()*10*10000;
            console.log('delay',delay);
            setTimeout(resolve(self.name),delay);
        });
        promise.then(function(result){
            self.value=self.name+" "+"payload";
            stateContainer.list[result]=true;
            let state=stateContainer.checkStates();
            

            console.log(self.name,state, stateContainer);
            /* if(state){
                initiator.initiate();
            } */
        });
    }
}

class RatesRequest extends Request
{
    constructor()
    {
        super();
        this.name="rates";
        this.value=null;
    }
}

class ServicesRequest extends Request
{
    constructor()
    {
        super();
        this.name="services";
        this.value=null;
    }
}

class StocksRequest extends Request
{
    constructor()
    {
        super();
        this.name="stocks";
        this.value=null;
    }
}

rates=new RatesRequest();
services=new ServicesRequest();
stocks=new StocksRequest();

var initiator=new Initiator();

rates.send();
services.send();
stocks.send();
