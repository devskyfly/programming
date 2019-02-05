var events = require('events');

var eventEmmitter = new events.EventEmitter();

var connectHandler= function connected(){
	console.log('Connection succesful.');
	eventEmmitter.emit('data_received');
}

eventEmmitter.on('connection',connectHandler);

eventEmmitter.on('data_received',function(){
	console.log('Data received succesfully.');
});

eventEmmitter.emit('connection');

console.log("Program Ended.");