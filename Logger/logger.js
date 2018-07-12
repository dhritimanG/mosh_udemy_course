const EventEmitter = require('events');

class Logger extends EventEmitter{
    log(message){
        // Send an HTTP Request
        console.log("Message logged was: " + message);

        // Raise an event
        // The second argument inside the emit function is called 
        // the event argument, denoted as 'eventArg' or 'arg or 'e'
        // This eventArg is what is used in the EventEmitter on function 
        this.emit('logging', {data: 'message'})
    }
}

module.exports = Logger;