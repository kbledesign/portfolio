export default function test() {

    console.log("ES6 Features");

    {
        let a = 3; // block scope
        const b = 4; // read only 
    }

    function spread(a, b, c) { }
    spread(...[1, 2, 3])

    function rest(a, b, ...c) { }
    rest(1, 2, 3, 4, 5) // 1,2,[3,4,5]

    function defaultParameter(a = 11, b = 31) { }

    function defaultValueExpressions(a = b + 1, z = (x) => x + 3) { }

    //let [e, f, g] = destructure();
    //var { h = 10, i = 20, j = 30 } = bar();

    function destructureParam([a, b]) {
        console.log(a, b);
    }

    function defaultParamObj({ x = 10 } = {}, { y } = { y: 10 }) {
        console.log(x, y);
    }

    function foo({ y } = { y: 10 }) { console.log(foo, y) }
    function bar({ y = 10 } = {}) { console.log(bar, y) }
    function car({ y = 10 }) { console.log(car, y) }

    // <!--  destructure and restructure 
    var defaults = {
        theme: 'light',
        fontSize: 16
    };

    var config = {
        theme: 'dark'
    };

    // Merge `defaults` into `config`
    {
        let {
            theme = defaults.theme,
            fontSize = defaults.fontSize
        } = config;

        // Restructure
        config = {
            theme,
            fontSize
        };
    }
    // -->

}