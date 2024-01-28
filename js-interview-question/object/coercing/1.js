
class Box {
    #value;
    constructor(value) {
        this.#value = value;
    }
    valueOf() {
        return this.#value;
    }
}

const box = new Box(123);
console.log(box + 456); // 579
console.log(box == 123); // true

