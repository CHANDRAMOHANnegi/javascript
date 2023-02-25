function getThis() {
    console.log(this)
}

const obj = {
    name: "cm"
}

const myBind = getThis.bind(obj)

console.log(obj);

myBind()