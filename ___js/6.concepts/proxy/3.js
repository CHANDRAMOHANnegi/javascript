
function growl() {
    return 'grrr'
}

const loudGrowl = new Proxy(growl, {
    apply: function (target, thisArg, args) {

        /***
         * Do not use Arrow function here
         * 
         * ****/ 
        return Reflect.apply(...arguments).toUpperCase() + "!!!"
    }
})

console.log(loudGrowl());
