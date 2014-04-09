var express = require('express');
var app = express();

require('raptor-optimizer').configure({
    bundlingEnabled: false,
    fileWriter: {
        checksumsEnabled: false
    }
});

var port = 8080;

app.use('/static', express.static(__dirname + '/static'));

require('./routes')(app);

app.listen(port, function() {
    console.log('Listening on port %d', port);

    if (process.send) {
        process.send('online');
    }
});
