/**
 * Created by jalalc on 10/30/15.
 */

// closure =  ability to capture the parent scope
function closureTest()
{
    var someVar = 5;

    return function()
    {
        someVar++;
        return someVar;
    };
}

closureTest();