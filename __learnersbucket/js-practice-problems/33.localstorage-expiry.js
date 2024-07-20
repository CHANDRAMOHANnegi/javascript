const myLocalStorage = {

    setItem: (key, value, expiry = 30 * 24 * 60 * 60 * 1800) => {
        const expiryTime = Date.now() + expiry
        const data = { value, expiryTime }

        window.localStorage.setItem(key, JSON.stringify({ ...data }))
    },

    getItem: (key) => {
        const data = localStorage.getItem(key)
        if (data) {
            const { value, expiryTime } = JSON.parse(data)

            if (expiryTime >= Date.now()) {
                window.localStorage.removeItem(key)
                return null
            } else {
                return value
            }
        }
        return null
    },
    clear: () => {
        window.localStorage.clear()
    },
    removeItem: (key) => {
        window.localStorage.removeItem(key)
    }

}

// your code goes here....

// set 'bar' on 'foo' that will expiry after 1000 milliseconds
myLocalStorage.setItem('foo', 'bar', 1000);

// after 2 seconds
console.log(myLocalStorage.getItem('foo'));
// null