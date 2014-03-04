var raptorTemplates = require('raptor-templates');
var templatePath = require.resolve('./template.rhtml');

exports.render = function(input, context) {

    var label = input.label;
    label = label.toUpperCase();

    var attrs = input['*'];
    var className = attrs['class'];
    if (className) {
        attrs['class'] = 'simple-button ' + className;
    }

    raptorTemplates.render(templatePath, {
        label: label,
        attrs: attrs
    }, context);
};