var raptorTemplates = require('raptor-templates');
var chickensService = require('../../services/chickens-service');

var templatePath = require.resolve('./index.rhtml');
// var templatePath = require('path').join(__dirname, 'index.rhtml');

module.exports = function(req, res) {

    // Less efficient non-streaming usage:
    // raptorTemplates
    //     .render(
    //         templatePath,
    //         {
    //             name: 'Frank'
    //         },
    //         function (err, output) {
    //             res.end(output);
    //         });
    //         
    //         

    chickensService.getAllChickens(function(err, chickens) {
        raptorTemplates
            .stream(
                templatePath,
                {
                    chickens: chickens
                })
            .pipe(res);
    });

    
};