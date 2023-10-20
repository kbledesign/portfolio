var a = Array.of(3) // 1, [3]
var b = Array.of(1, 2, 3) // 3, [1,2,3]

var c = Array.from(arrLike) // [1,2, undefined]

var arr = [1, 2, 3, 4, 5];
arr.copyWithin(3, 0) // mutates

var d = Array(4).fill(undefined); // [undefined...]
d.fill(41, 1, 3)[undefined, 42, 42, undefined]

var result = arr.find((v) => v == 2); // 2

var findIndex = arr.findIndex((v) => v === 2) // 2

// values, keys, entries, symbol.iterator