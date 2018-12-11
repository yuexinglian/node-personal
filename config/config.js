var development = require('./development');
var production = require('./production');

function config() {
    switch (process.env.NODE_ENV) {
    case 'development':
        return development;
    case 'production':
        return production;
    default:
        return development;
    }
}

module.exports = config();
