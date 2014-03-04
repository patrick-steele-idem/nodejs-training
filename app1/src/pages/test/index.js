var raptorTemplates = require('raptor-templates');
var templatePath = require.resolve('./test.rhtml');


module.exports = function(req, res, next) {
    
    raptorTemplates
        .stream(templatePath, {
            colors: ['red', 'green', 'blue']
        })
        .pipe(res);
};