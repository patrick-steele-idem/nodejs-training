var raptorTemplates = require('raptor-templates');
var templatePath = require.resolve('./template.rhtml');

module.exports = function render(input, context) {
    raptorTemplates.render(
        templatePath,
        {
            name: input.name
        },
        context);
};