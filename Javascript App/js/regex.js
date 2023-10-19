export default function regex() {
    let pattern = 'abc';
    let text = "abc 123";
    let result = pattern.test(text); // boolean
    let matches = pattern.match(text); //["abc"]

    let patAnyDigit = /\d/;
    let patAnyChar = /\w/;
    let patModCase = /app/i;
    let patModGlobal = /app/g; // ["app","app"]
    let patModAnyChar = /[abc]/; // boolean
    let patModQuantifiers = /go*d/; // go,o, boolean
    // + matches 1 or more.
    // ? matches 0 or 1.
    // { n } matches exactly n times.
    // { n, m } matches between n and m times.

    const r1 = /^apple/; //start of string
    const r2 = /$apple/; //end of string
    const r3 = /\./; // match characters like . and *
    const r4 = /\./; // match characters like . and *

    let r5 = "str".test(); // checks string
    let r6 = "str".match(); // array of matches
    let r7 = "str".search(); // return index or -1
    let r8 = "str".replace(); // new str with replacement 

    let p9 = new RegExp("apple");
    let p10 = p9.test("I have an apple.");
}