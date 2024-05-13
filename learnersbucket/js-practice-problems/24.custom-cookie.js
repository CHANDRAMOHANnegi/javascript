const separateKeyValue = (str) => str.split("=").map(str => str.trim())

function parseCookieString(str) {

  const [nameValue, ...rest] = str.split(";")
  const [key, value] = separateKeyValue(nameValue)

  const options = {}
  for (const option of rest) {
    const [key, value] = separateKeyValue(option)
    options[key] = value
  }

  return {
    key,
    value,
    options
  }
}

const useCustomCookie = () => {
  const store = new Map()

  Object.defineProperty(document, "myCookie", {
    configurable: true,
    get: () => {
      const cookies = []

      for (const [key, { value, expiry }] of store) {
        if (expiry <= Date.now()) {
          store.delete(key)
        } else {
          cookies.push(`${key}=${value}`)
        }
      }
      return cookies.join("; ")
    },
    set: (val) => {
      const { key, value, options } = parseCookieString(val)

      let expiry = Infinity
      if (options['max-age']) {
        expiry = Date.now() + 1 * options['max-age'] * 1000
      }

      store.set(key, { value, expiry })
    }
  })

}

useCustomCookie();
document.myCookie = "blog=learnersbucket";

// this will expire after 1 second
document.myCookie = "name=prashant;max-age=1";

console.log(document.myCookie);

setTimeout(() => {
  console.log(document.myCookie);
}, 1500);

// Output:
// "blog=learnersbucket; name=prashant"
// "blog=learnersbucket"

