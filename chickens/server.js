var express = require('express');
var app = express();
var raptorDataProviders = require('raptor-data-providers');
var chickensService = require('./src/services/chickens-service');


require('view-engine').configure({
    engines: {
        'view-engine-raptor': {
            extensions: ['rhtml']
            // Any additional config...
        }
    }
});

require('raptor-optimizer').configure({
    bundlingEnabled: true,
    fileWriter: {
        checksumsEnabled: true
    }
});

var port = 8080;

app.use('/static', express.static(__dirname + '/static'));

require('./routes')(app);

raptorDataProviders.register({
    allChickens: function(args, callback) {
        chickensService.getAllChickens(callback);
    }
});

app.listen(port, function() {
    console.log('Listening on port %d', port);

    if (process.send) {
        process.send('online');
    }
});
