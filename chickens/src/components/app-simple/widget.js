var $ = require('jquery');

function Widget() {
    console.log('Widget initialized: ' + __filename, this.el);

    $(this.el).click(function() {
        $(this).css('background-color', 'red');
    });

}

Widget.prototype = {

};

module.exports = Widget;