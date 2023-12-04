export default function test() {
    function* gen() {
        let x = 1;
        x++;
        console.log("x:", x);
        yield;
        x++;
        console.log("x:", x);
    }
    const it = gen();
    it.next();
    it.next();

    function* genReturn(x, y) {
        const result = x * 7;
        return x;
    }

    const is = genReturn(2, 2);
    const res = is.next();
    console.log(res); //returns obj with value

    function* iterationMessage(x) {
        const y = yield "initiated";
        const result = x * y;
        return result;
    }

    const isit = iterationMessage(6);
    const res1 = isit.next(5); // starts generator

    console.log("yield message", res1);
    const res2 = isit.next(5);
    console.log("iteration response:", res2);


}
