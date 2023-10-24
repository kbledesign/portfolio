// Example functions
function words(str) {
    return String(str)
        .toLowerCase()
        .split(/\s|\b/)
        .filter(function alpha(v) {
            return /^[\w]+$/.test(v);
        });
}

function unique(list) {
    var uniqList = [];

    for (let v of list) {
        if (uniqList.indexOf(v) === -1) {
            uniqList.push(v);
        }
    }

    return uniqList;
}

function skipShortWords(words) {
    var filteredWords = [];

    for (let word of words) {
        if (word.length > 4) {
            filteredWords.push(word);
        }
    }

    return filteredWords;
}

// Composing functions using manual composition
var text = "To compose two functions together, pass the output of the first function call as the input of the second function call.";

var wordsFound = words(text); // Split text into words
var uniqueWords = unique(wordsFound); // Remove duplicate words

console.log(uniqueWords);
// Output: ["to","compose","two","functions","together","pass","the","output","of","first","function","call","as","input","second"]

// Composing functions using the compose function
function compose(...fns) {
    return function composed(result) {
        var list = [...fns];

        while (list.length > 0) {
            result = list.pop()(result);
        }

        return result;
    };
}

var biggerWords = compose(skipShortWords, unique, words);
var wordsUsed = biggerWords(text);

console.log(wordsUsed);
// Output: ["compose","functions","together","output","first","function","input","second"]

// Composing functions using the pipe function
function pipe(...fns) {
    return function piped(result) {
        var list = [...fns];

        while (list.length > 0) {
            result = list.shift()(result);
        }

        return result;
    };
}

var wordsPipe = pipe(words, unique, skipShortWords);
var wordsFiltered = wordsPipe(text);

console.log(wordsFiltered);
// Output: ["compose","functions","together","output","first","function","input","second"]



// Abstraction example
function storeData(store, location, value) {
    store[location] = value;
}

// Using abstraction to store a comment
function saveComment(txt) {
    if (txt != "") {
        storeData(comments, comments.length, txt);
    }
}

// Using abstraction to track an event
function trackEvent(evt) {
    if (evt.name !== undefined) {
        storeData(events, evt.name, evt);
    }
}



// Abstraction through function composition
function prop(name, obj) {
    return obj[name];
}

function extractName(person) {
    return person.name;
}

// Function composition example
var extractAndOutputName = compose(output, extractName);

// Using the composed function
var person = { name: "John" };
extractAndOutputName(person); // Outputs "John"



// Abstraction with conditional logic
function conditionallyStoreData(store, location, value, checkFn) {
    if (checkFn(value, store, location)) {
        store[location] = value;
    }
}

function notEmpty(val) {
    return val != "";
}

// Using conditional abstraction
function saveComment(txt) {
    conditionallyStoreData(comments, comments.length, txt, notEmpty);
}
