const cachedApiCall = function (timeOut) {
    const cache = {}

    const inner = async (url, options) => {
        const key = url
        const entry = cache[key]
        if (entry && Date.now() < entry.expiryTime) {
            console.log('fetching from cache');
            return cache[key].value
        }
        try {
            const response = await fetch(url, { ...options })
            const data = await response.json()
            cache[key] = { value: data, expiryTime: Date.now() + timeOut }
        } catch (error) {
        }
        return cache[key].value
    }
    return inner
};

const call = cachedApiCall(1500);

// first call
// an API call will be made and its response will be cached
call('https://jsonplaceholder.typicode.com/todos/1', {}).then((a) => console.log(a));
//"making new api call"
/*
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
*/

// cached response will be returned
// it will be quick
setTimeout(() => {
    call('https://jsonplaceholder.typicode.com/todos/1', {}).then((a) => console.log(a));
}, 700);
/*
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
*/

// a fresh API call is made
// as time for cached entry is expired
setTimeout(() => {
    call('https://jsonplaceholder.typicode.com/todos/1', {}).then((a) => console.log(a));
}, 2000);
//"making new api call"
/*
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
*/