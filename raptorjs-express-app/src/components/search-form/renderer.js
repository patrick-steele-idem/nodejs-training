var template = require('view-engine').load(require.resolve('./template.rhtml'));

exports.tag = {
    attributes: {
        keywords: 'string'
    }
};

module.exports = function render(input, context) {
    template.render({
        keywords: input.keywords || ''
    }, context);
};

     