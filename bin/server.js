const app = require('../app');
const http = require('http');
const config = require('../config/config');

const setPort = normalizePort(config.port || '3000');

app.set('port', setPort);

const server = http.createServer(app);

server.listen(setPort);
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(portValue) {
    const port = parseInt(portValue, 10);
    if (isNaN(port)) {
        return portValue;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const bind = typeof setPort === 'string' ? 'Pipe' + setPort : 'Port' + setPort;

    switch (error.code) {
    case 'EACCES':
        console.error(bind + 'requires elevated privileges');
        process.exit(1);
        break;
    case 'EADDRINUSE':
        console.error(bind + 'is already in use');
        process.exit(1);
        break;
    default: throw error;
    }
}

function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    console.log('Listening on ' + bind);
}
