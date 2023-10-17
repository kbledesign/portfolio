export default function test() {
    function step1(callback) {
        setTimeout(() => {
            console.log("step1");
            callback();
        }, 1000)
    }
    function step2(callback) {
        setTimeout(() => {
            console.log("step2");
            callback();
        }, 1000)
    }
    function step3(callback) {
        setTimeout(() => {
            console.log("step3");
            callback();
        }, 1000)
    }
    function callBackHell() {
        step1(() => {
            step2(() => {
                step3(() => {
                    console.log("message from hell!");
                })
            })
        })
    }
    callBackHell();
}