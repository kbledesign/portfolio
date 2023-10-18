export default function test() {
    if (!Object.is) {
        Object.is = function (v1, v2) {
            if (v1 === 0 && v2 === 0) {
                return 1 / v1 === 1 / v2;
            }
            if (v1 !== v1 && v2 !== v2) {
                return true;
            }
            return v1 === v2;
        };
    }
    if (!Array.prototype.map) {
        Array.prototype.map = function (cb) {
            if (typeof cb !== "function") {
                throw new TypeError("CB must be a function.")
            }
            const array = this;
            const newArray = new Array(array.length);

            for (let i = 0; i < array.length; i++) {
                if (i in array) {
                    newArray[i] = callback(array[i], i, array);
                }
            }
            return newArray;
        }
    }
}
