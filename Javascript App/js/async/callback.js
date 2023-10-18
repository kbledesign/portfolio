export default function test() {
    const step1 = (callback) => {
        setTimeout(() => {
            console.log("step1");
            callback();
        }, 1000)
    }
    const step2 = (callback) => {
        setTimeout(() => {
            console.log("step2");
            callback();
        }, 1000)
    }
    const step3 = (callback) => {
        setTimeout(() => {
            console.log("step3");
            callback();
        }, 1000)
    }
    const callBackHell = () => {
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