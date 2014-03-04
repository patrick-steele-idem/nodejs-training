var EventEmitter = require('events').EventEmitter;

var myEventEmitter1 = new EventEmitter();
var myEventEmitter2 = new EventEmitter();

function Dog(name) {
    Dog.$super.call(this);
    this.name = name;
}

Dog.prototype = {
    woof: function(message) {
        this.emit('woof', this.name);
    }
};

require('raptor-util').inherit(Dog, EventEmitter);

// Dog.prototype.woof = function(message) {
//     this.emit('woof', this.name);
// };

var dog = new Dog('Lucky');
dog.on('woof', function(name) {
    console.log(name + ' says woof');
});

dog.woof();
dog.woof();


process.nextTick(function() {
    console.log('NEXT TICK CALLED!');
});

console.log('events.js ended!');