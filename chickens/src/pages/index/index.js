var raptorDataProviders = require('raptor-data-providers');
var raptorTemplates = require('raptor-templates');
var templatePath = require.resolve('./index.rhtml');
// var templatePath = require('path').join(__dirname, 'index.rhtml');

module.exports = function(req, res) {

    require('./test').sayHello('John');

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
    
    var context = raptorTemplates.createContext(res);

    raptorDataProviders.register({
        userProfile: function(args, callback) {
            setTimeout(function() {
                callback(null, {
                    name: 'John Doe',
                    age: 30,
                    isLoggedIn: true
                });
            }, 10);
        }
    }, context);

    raptorTemplates
        .render(
            templatePath,
            {},
            context);

    context.end();

    // chickensService.getAllChickens(function(err, chickens) {
    //     raptorTemplates
    //         .stream(
    //             templatePath,
    //             {
    //                 chickens: chickens
    //             })
    //         .pipe(res);
    // });
};