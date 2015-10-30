/**
 * Created by jalalc on 10/30/15.
 */

// create a basic trait for movable object
var movable = {
    move : function(x, y)
    {
        this.pos.x += x;
        this.pos.y += y;
        return this;
    }
};


// obj inherit the trait in its own prototype
var obj = Object.create(movable);

// add attribute to have the requirements needed by movable trait
obj.pos = {
    x : 1,
    y : 2
};

obj.move(1, 2);

// obj1 inherit from obj
var obj1 = Object.create(obj);

// say hello
obj1.sayHello = function()
{
    console.log('hello world');
    return this;
};

obj1.move(1, 4);

console.log(obj1.sayHello());

// create a obj2
var obj2 = {
    pos : {
        x : 1,
        y : 2
    }
};

// to work with the movable obj2 must have pos attribute with x and y
movable.move.call(obj2, 4, 8);

console.log(obj2);
