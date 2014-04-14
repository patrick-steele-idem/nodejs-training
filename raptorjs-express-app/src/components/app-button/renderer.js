var template = require('view-engine').load(require.resolve('./template.rhtml'));
var raptorRenderer = require('raptor-renderer');
var uniqueId = require('raptor-widgets').uniqueId;
var extend = require('raptor-util').extend;

exports.tag = {
    attributes: {
        id: 'string',
        label: 'string',
        href: 'string',
        variant: 'string', // primary | info | success | warning | danger | inverse
        size: 'string', // large | small | mini
        toggle: 'boolean',
        toggled: 'boolean',
        dropdown: 'boolean',
        '*': 'string',
        'w:event-click': null
    }
};

module.exports = function render(input, context) {
    if (!context) {
        return raptorRenderer.render(exports, input);
    }
    
    var rootAttrs = {};
                    
    var classParts = ["btn"];

    var type = 'button';

    if (input.href) {
        type = 'link';
        input.variant = "link";
    }
    
    if (input.variant) {                    
        classParts.push("btn-" + input.variant);
    }
    
    if (input.size) {                    
        classParts.push("btn-" + input.size);
    }
    
    var splatAttrs = input['*'];
    if (splatAttrs) {
        var className = splatAttrs["class"];
        if (className) {
            delete splatAttrs["class"];
            classParts.push(className);
        }
        extend(rootAttrs, splatAttrs);
    }
    
    rootAttrs["class"] = classParts.join(" ");


    
    var widgetConfig = {};
    
    if (input.toggle) {
        widgetConfig.toggle = true;
    }

    template.render({
        id: input.id || ('btn' + uniqueId(context)),
        type: type,
        tag: input, 
        label: input.label,
        rootAttrs: rootAttrs,
        widgetConfig: widgetConfig,
        isDropdown: input.dropdown === true,
        href: input.href
    }, context);
};

     