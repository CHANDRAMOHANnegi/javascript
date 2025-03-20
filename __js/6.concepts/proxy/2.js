let bears = { grizzly: true }

let grizzlyCount = 0

const proxyBears = new Proxy(bears, {
    get: (target, prop) => {
        if (prop === "grizzly")
            grizzlyCount++

        return Reflect.get(target, prop)
    },

    set: (target, prop, value) => {

        if (['grizzly', 'brown', 'polar'].indexOf(prop) === -1) {
            throw new Error('That is not a bear')
        }

        return Reflect.set(...arguments)
    }
})


proxyBears.grizzly
proxyBears.grizzly
proxyBears.grizzly
proxyBears.grizzly
proxyBears.grizzly

console.log(grizzlyCount);

proxyBears.grizzly = "2"


