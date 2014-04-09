var express = require('express');
var app = express();

var args = require('./parse-args')();


require('view-engine').configure({
    engines: {
        'view-engine-raptor': {
            extensions: ['rhtml']
        }
    }
});

var port = args.port || 8080;

app.use('/static', express.static(__dirname + '/static'));

require('./routes')(app);

app.listen(port, function() {
    console.log('Listening on port %d', port);

    if (process.send) {
        process.send('online');
    }
});
