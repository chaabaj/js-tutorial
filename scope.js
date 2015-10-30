/**
 * Created by jalalc on 10/30/15.
 */

function scopeTest()
{
    var y = 1;

    // doesn't create a scope
    {
        var x = 5; // will be hoisted
    }

    console.log(x);

    // create a new scope
    (function()
    {
        var z = 5;

        console.log(z);
    })();

    // console.log(z) // throw z is not defined
}

scopeTest();