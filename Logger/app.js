const Logger = require('./logger');
logger = new Logger();


logger.on('logging', eventArg => {
    console.log('Listener added', eventArg);
});

logger.log("How are you?");