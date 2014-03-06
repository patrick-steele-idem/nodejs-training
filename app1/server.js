var express = require('express');
var nodePath = require('path');

require('app-module-path').addPath(nodePath.join(__dirname, 'src'));

var PORT = 8080;

var app = express();

var customMiddleware = function(req, res, next) {
    console.log('REQUEST: ' + req.url);
    next();
};

require('raptor-optimizer').configure({
    plugins: {
        'raptor-optimizer-require': {}
    },
    "bundlingEnabled": true,
    // "fileWriter": {
    //     "outputDir": nodePath.join(__dirname, 'build'),
    //     "urlPrefix": "/static"
    // },
    // filters: [
    //     'minify-js'
    // ]
}, __dirname);

app.use(customMiddleware);

app.use('/static', express.static(__dirname + '/static'));

require('./routes').addRoutes(app);

app.listen(PORT, function() {
    console.log('Listening on port ' + PORT);
    if (process.send) {
        process.send('online');
    }
});