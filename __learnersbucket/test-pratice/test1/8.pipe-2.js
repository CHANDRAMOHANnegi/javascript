
function pipe(...fns) {
    /***
     * initial value and then just pass calculated value to next one
     * **/
    return function (...args) {
        return fns.reduce((all, fn) => fn(all), ...args)
    }
}

const val = { salary: 10000 }

const getSalary = (person) => person.salary
const addBonus = (netSalary) => netSalary + 1000
const deductTax = (grossSalary) => grossSalary - (grossSalary * 0.3)

const result = pipe(getSalary, addBonus, deductTax)(val)

console.log(result);