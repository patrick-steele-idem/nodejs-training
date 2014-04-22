var template = require('view-engine').load(require.resolve('./template.rhtml'));

module.exports = function render(input, context) {
    template.render(
        {
            name: input.name
        },
        context);
};