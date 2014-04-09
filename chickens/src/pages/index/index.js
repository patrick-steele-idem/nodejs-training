var raptorDataProviders = require('raptor-data-providers');

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
    
    // var context = raptorTemplates.createContext(res);

    // raptorDataProviders.register({
    //     allChickens: function(args, callback) {
    //         chickensService.getAllChickens(callback);
    //     }
    // }, context);

    // raptorTemplates
    //     .render(
    //         templatePath,
    //         {},
    //         context);

    // context.end();

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