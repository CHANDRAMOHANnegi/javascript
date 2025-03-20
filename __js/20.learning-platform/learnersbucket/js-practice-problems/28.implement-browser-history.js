const BrowserHistory = function () {
    this.historyStack = []
    this.backStack = []

    this.visit = (page) => {
        this.historyStack.push(page)
    }

    this.backward = () => {
        return this.backStack.push(this.historyStack.pop())
    }

    this.forward = () => {
        return this.historyStack.push(this.backStack.pop())
    }

    this.current = () => {
        return this.historyStack[this.historyStack.length - 1]
    }

}

const bh = new BrowserHistory();

bh.visit('A');
console.log(bh.current());

bh.visit('B');
console.log(bh.current());

bh.visit('C');
console.log(bh.current());

bh.backward();
console.log(bh.current());

bh.visit('D');
console.log(bh.current());

bh.backward();
console.log(bh.current());

bh.forward();
console.log(bh.current());

// Output:
// "A"
// "B"
// "C"
// "B"
// "D"
// "B"
// "D"