

// func.call(this,[......])


function myCall(ref, ...params) {
    const func = this;

    ref.func = func
    func(...params)
}

