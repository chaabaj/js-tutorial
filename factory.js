var utils = require('./function.js');

// Generic object factory that support multiple inheritance and optimize the prototype chain
function objFactory(initValue)
{
    var args = Array.prototype.slice.call(arguments, 1);
    var proto;
    var obj;

    proto = args.reduce(function(oldProto, currentProto)
    {
        return utils.merge(oldProto, currentProto);
    }, {});
    obj = Object.create(proto);
    return utils.merge(obj, initValue);
}

var playerFactory = objFactory.bind(null, {
    name : 'toto',
    pos : {
        x : 1,
        y : 2
    }
}, {
   hello : function()
   {
       console.log("Hello my name is : " + this.name);
       return this;
   }
});

var player = playerFactory();

console.log(player.hello());