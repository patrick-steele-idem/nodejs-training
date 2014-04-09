module.exports = function() {
    return require('raptor-args')
        .createParser({
            '--help': {
                type: 'string',
                description: 'Show this help message'
            },
            '--port -p': {
                type: 'number',
                description: 'Port number to listen on'
            }
        })
        .usage('Usage: $0 server [options]')
        .example(
            'Start the server on port 8080',
            '$0 server --port 8080')
        .validate(function(result) {
            if (result.help) {
                this.printUsage();
                process.exit(0);
            }
        })
        .onError(function(err) {
            this.printUsage();
            console.error(err);
            process.exit(1);
        })
        .parse();   
};