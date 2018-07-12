const EventEmitter = require('events');
var emitter = new EventEmitter();

// Register an event listener
emitter.on('logging', eventArg => {
    console.log('Listener added', eventArg);
});

// Raise an event
emitter.emit('logging', {data: 'message'});