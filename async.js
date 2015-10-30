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

test();

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

testSetInterval();



