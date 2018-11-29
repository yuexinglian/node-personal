var development = require('./development');
var production = require('./production');

module.exports = () => {
    switch (process.env.NODE_ENV) {
    case 'development':
        return development;
    case 'production':
        return production;
    default:
        return development;
    }
};
