// polyfill
if (!Number.isNaN) {
    Number.isNaN = function (x) {
        return x !== x;
    };
}

// arrow funcitons
try {
    new Function("( () => {} )");
    ARROW_FUNCS_ENABLED = true;
} catch (err) {
    ARROW_FUNCS_ENABLED = false;
}


// tail call optimization TCO for recursion

"use strict";
function foo(x) {
    function _foo(acc, x) {
        if (x <= 1) return acc;
        return _foo((x / 2) + acc, x - 1);
    }

    return _foo(1, x);
}

foo(123456); // 3810376848.5
