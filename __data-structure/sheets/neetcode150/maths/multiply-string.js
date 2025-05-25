/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

var multiply = function (num1, num2) {
    if (num1 === "0" || num2 === "0") return "0"
    const res = Array.from({ length: num1.length + num2.length }, () => 0)

    num1 = num1.split('').reverse().join('');
    num2 = num2.split('').reverse().join('');

    for (let i = 0; i < num1.length; i++) {
        for (let j = 0; j < num2.length; j++) {
            const product = parseInt(num1[i]) * parseInt(num2[j])
            res[i + j] += product
            res[i + j + 1] += Math.floor(res[i + j] / 10)
            res[i + j] = res[i + j] % 10
        }
    }

    let str = ""
    let idx = res.length - 1

    while (idx >= 0 && res[idx] === 0) {
        idx--
    }

    while (idx >= 0) {
        str += res[idx]
        idx--
    }

    return str//.join("")
};