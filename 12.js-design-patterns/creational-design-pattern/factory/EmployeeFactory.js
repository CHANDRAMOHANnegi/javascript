
function Developer(name) {
    this.name = name
    this.type = "Developer"
}

class Tester {
    constructor(name) {
        this.name = name
        this.type = "Tester"
    }
}

class CustomerSupport {
    constructor(name) {
        this.name = name
        this.type = "CustomerSupport"
    }
}

function EmployeeFactory() {
    this.create = (name, type) => {
        switch (type) {
            case 1:
                return new Developer(name)
            case 2:
                return new Tester(name)
            case 3:
                return new CustomerSupport(name)
            default:
                break;
        }
    }
}

function say() {
    console.log(`Hi, I am ${this.name} and I am a ${this.type}`);
}

const employeeFactory = new EmployeeFactory()
const employees = []

employees.push(employeeFactory.create("cm", 1))
employees.push(employeeFactory.create("naveen", 2))
employees.push(employeeFactory.create("sakshi", 3))

employees.forEach(emp => say.call(emp))