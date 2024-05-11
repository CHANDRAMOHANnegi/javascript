const pipe = (...fns) => {
    const inner = (obj) => {
        const val = fns.reduce((acc, fn) => fn(acc), obj)
        return val
    }
    return inner
}


const getSalary = (person) => person.salary
const addBonus = (netSalary) => netSalary + 1000;
const deductTax = (grossSalary) => grossSalary - (grossSalary * .3);

const val = { salary: 10000 };

const result = pipe(
    getSalary,
    addBonus,
    deductTax
)({ salary: 10000 });

console.log(result);
// 7700