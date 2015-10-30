/**
 * Created by jalalc on 10/30/15.
 */

function defer(fn)
{
    return setTimeout(fn, 0);
}

function test()
{
    defer(function()
    {
        console.log("Hello i'm a function that execution will be deferred");
    });
    console.log("Hello world");
}


function testSetInterval()
{
    var i = 0;

    var timerId = setInterval(function()
    {
        'use strict';

        console.log("Test");
        i++;
        if (i > 5)
        {
            clearInterval(timerId);
        }
    }, 25);
}


function asyncForEach(array, fn)
{
    var length = 0;

    var iter = function(index)
    {
        if (index < array.length)
        {
            defer(function()
            {
                fn(array[index], index, array);
                iter(index + 1);
            });
        }
    };
    iter(0);
}

asyncForEach([1, 2, 3, 4, 5, 6], function(item)
{
    console.log(item);
});

test();
testSetInterval();



