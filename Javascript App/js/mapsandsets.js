var myMap = new Map();

var x = { id: 1 }
var y = { id: 2 }
myMap.set(x, "foo")
myMap.set(y, "bar")


console.log("keys", [...myMap.keys()])
console.log("values", [...myMap.values()])
console.log("size", myMap.size)


myMap.get(x)
myMap.delete(y)
myMap.has(x)

for (let entry of myMap.entries()) {
    console.log("entry", entry[0], entry[1])
}

console.log("myMap", myMap);
myMap.clear()

// weakmaps - obj only as keys, GC when no longer used, no iteration methods

var s = new Set(); // unordered, add, delete, has 

var x = { id: 1 }, y = { id: 2 }

s.add(x)
s.add(y)
s.add(x) // duplicates ignored

for (const entry of s) {
    console.log("entry >>>", entry)
}
s.size;
s.delete(y)

console.log(s.has(x));

// weaksets - gc, no iteration, 


// set - list of unique elements, map - collection key/value pairs (fast).
// set - check for value or remote, maps - key references and iteration
// set unordered, maps orders of insertion
// set - non duplicates, maps duplicates buy unique keys
// both store all object types and have size props