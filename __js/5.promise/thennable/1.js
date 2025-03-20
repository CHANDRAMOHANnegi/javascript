const thenable = {
    then: function (callback) {
        setTimeout(() => callback(2), 100)
    }
}

async function caller() {
    const value = await thenable
    console.log(value);
}

caller()

// we can use await with promise as well as 
// any object that implements a then function.

