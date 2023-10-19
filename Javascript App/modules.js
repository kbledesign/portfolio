export default function test() {
    function Hello(name) {
        function greeting() {
            console.log("Hello" + name);
        }
        return {
            greeting: greeting
        }
    }

    let me = Hello("Kyle");
    me.greeting();

    var me2 = (function Singleton(name) {
        function greeting() {
            console.log("Hello" + name);
        }
        return {
            greeting: greeting
        }
    })("Kyle");

    me2 = Singleton();
}