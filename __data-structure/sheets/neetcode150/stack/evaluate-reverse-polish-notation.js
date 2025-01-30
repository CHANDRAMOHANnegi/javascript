/**
 * @param {string[]} tokens
 * @return {number}
 */

const operators = "+-*/"
const isOperator=(sign)=>operators.includes(sign)
const operate = (a,b,sign)=>{
    a = parseInt(a)
    b = parseInt(b)
    const value = {
        "-":a-b,
        "+":a+b,
        "/":parseInt(a/b),
        "*":a*b,
    } 
    return value[sign]
}

var evalRPN = function(tokens) {
    if(tokens.length<2)
    return parseInt(tokens[0])
    const stack = [tokens.shift()]
    while(tokens.length){
        const next = tokens.shift()
        if(isOperator(next)){
            const first = stack.pop()
            const second = stack.pop()
            stack.push(operate(second,first,next))
        }else{
            stack.push(next)
        }
    }
    return stack[0]
};