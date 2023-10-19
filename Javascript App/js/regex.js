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

}