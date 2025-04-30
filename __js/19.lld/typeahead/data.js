const FRUITS = ["apple", "apricot", 'banana', 'litchi', 'grapes', "pineapple", "straw berry"]

export const getSuggestionList = (text, { signal }) => {
    let timer = null
    return new Promise((resolve, reject) => {
        if (signal.aborted) {
            reject(new DOMException("aborted"))
        }

        const result = FRUITS.filter(fruit => fruit.toLowerCase().includes(text))
        timer = setTimeout(() => {
            if (!signal.aborted) {
                resolve(result)
            }
        }, 500)

        signal.addEventListener("abort", () => {
            clearTimeout(timer)
            reject(new DOMException("aborted"))
        })

    })
}