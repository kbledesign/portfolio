const app = () => {
    function exampleVoid() {
        return;
        //  void is inferred when using return without value;
    }
    function exampleUnknown(a: unknown) {
        // a.b();
    }
    function safeParse(s: string): unknown {
        return JSON.parse(s);
    }
    function fail(msg: string): never {
        throw new Error(msg);
    }
    function fn(x: string | number) {
        if (typeof x === "string") {
            // do something
        } else if (typeof x === "number") {
            // do something else
        } else {
            x; // has type 'never'!
        }
    }
    function doSomethign(f: Function) {
        // best to avoid thisas unsafe, any return type
        return f(1, 2, 3)
    }
    function multiply(n: number, m: []) {
        m.map((x) => n * x);
    }
    multiply(10, 1, 2, 3, 4)
}