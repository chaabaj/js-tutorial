function add(x, y)
{
    return x + y;
}

function foreach(array, fn)
{
    var length = array.length;

    for (var i = 0; i < length; ++i)
    {
        fn(array[i], i, array);
    }
}

function power(x, y)
{
    if (y === 0)
    {
        return 1;
    }
    if (y === 1)
    {
        return x;
    }
    return x * x;
}

function merge(dest, src)
{
    dest = dest || {};
    for (var key in src)
    {
        if (src.hasOwnProperty(key))
        {
            dest[key] = src[key];
        }
    }
    return dest;
}

var copy = merge.bind(null, null);

function extract(fields, obj)
{
    var extractFn = function(item)
    {
        var dest = {};

        foreach(fields, function(field)
        {
            if (item[field])
            {
                dest[field] = item[field];
            }
        });
        return dest;
    };

    if (obj)
    {
        return extractFn(obj);
    }
    return extractFn;
}

var src = { id : 1, name : 'toto', age : 24 };

console.info(extract(['id', 'name'], src)); // should print { id : 1, name : 'toto' }
console.info(extract(['id', 'name'])); // should print function(obj) { ....

var array = [copy(src), copy(src), copy(src)];

var extractedArray = array.map(extract(['id', 'name']));

function compose()
{
    var args = Array.prototype.slice.call(arguments);

    return function(initArg)
    {
        return args.reduce(function(prevResult, currentFn)
        {
            // first call for init the call chain
            if (!prevResult)
            {
                return currentFn(initArg);
            }
            return currentFn(prevResult);
        }, null);
    };
}

function fieldToValue(field, obj)
{
    return obj[field];
}

var fn = compose(copy, extract(['name', 'id']), fieldToValue.bind(null, 'id'));

console.log('test');
console.info(fn(src)); // should call copy with obj arg and forward the result to extract
console.log(power(2, 2));

var exports = {
    merge : merge,

};

module.exports = exports;