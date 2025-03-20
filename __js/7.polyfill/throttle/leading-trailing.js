

function throttle(func, wait, option = { leading: true, trailing: false }) {
    let timer = null
    let lastRanContext = null
    let trailingArgs = null

    return (...args) => {
        if (timer) {// is in waiting state
            trailingArgs = args
            lastRanContext = this
            return
        }

        if (option.leading) {
            func.call(this, ...args)// call with current this
        } else {
            trailingArgs = args
            lastRanContext = this
        }

        const cooldown = () => {
            if (option.trailing && trailingArgs) {
                func(lastRanContext, ...trailingArgs)
                lastRanContext = null
                trailingArgs = null
                timer = setTimeout(cooldown, wait)
            } else {
                timer = null; // reset timer
            }
        }
        timer = setTimeout(cooldown, wait)
    }

}



