let a = Array.of(3) // 1, [3]
let b = Array.of(1, 2, 3) // 3, [1,2,3]

let z = {
    length: 3,
    0: 1,
    1: 2
}

let c = Array.from(z) // [1,2, undefined]

let arr = [1, 2, 3, 4, 5];
arr.copyWithin(3, 0) // mutates

let d = Array(4).fill(undefined); // [undefined...]
d.fill(41, 1, 3)// [undefined, 42, 42, undefined]

let result = arr.find((v) => v == 2); // 2
let findIndex = arr.findIndex((v) => v === 2) // 2
// values, keys, entries, symbol.iterator


let g = Array.from(Array(10), (_, index) => index + 1)

g.push(6); // push to end
g.pop(); // remove last index
g.shift() // removes first
g.unshift(0) // adds to beginning
g.splice(0, 1, 100)
let h = g.slice(0, (g.length / 2)); // copies by index/position

g.sort();
g.reverse();

let i = g.concat(h)

console.log("copyWithin", i);
i.copyWithin(8, 3, 6)
console.log("copyWithin", i);

g = g.filter((a) => a % 2 === 0);
i = g.some((a) => a % 2 > 0);
h = g.every((a) => a % 2 === 0);
h = g.includes(9)

g.forEach(fruit => console.log("foreach", fruit * 2));

// h = g.reduce((acc, value, index) => acc + value, 0)
h = g.reduce((acc, val, index) => {
    acc[index] = val;
    return acc;
}, {})

//g = Array.isArray(g)
//g = g.lastIndexOf(1);
//g = g.indexOf(1);
//g = g.join(",")
//g = g.toString()
//g = g.values();
//g = g.entries();
//g = g.at(-1)

console.log("Result: g ", g);
console.log("Result: H", h);