function cache(func) {
    let memo = {};
    let slice = Array.prototype.slice;

    return function() {
        let args = slice.call(arguments);

        if (args in memo)
            return memo[args];
        else
            return (memo[args] = func.apply(this, args));

    }
}
let complexFunction = function (arg1,arg2) {
    return arg1+arg2; //just for example (any logic can be here)
}

let cachedFunc = cache(complexFunction);

module.exports = {cachedFunc};