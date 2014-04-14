var template = require('view-engine').load(require.resolve('./template.rhtml'));

module.exports = function render(input, context) {
    template.render(input, context);
};