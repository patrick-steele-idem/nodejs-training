var $ = require('jquery');

function Widget(widgetConfig) {
    console.log('WIDGET INITIALIZED: ' + this.id);

    var widgetId = this.id;
    var _this = this;


    $(this.getEl()).click(function() {
        $(_this.getEl('button')).css('background-color', 'blue');
    });


}

Widget.prototype = {

};

module.exports = Widget;