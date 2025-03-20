/**
 * LSP Violation Indication : Can't replace object 'rectangle' (superclass) with 'square' (subclass)
 * 
 * since the results would be different
 * */

class Rectangle {

    protected _width: number
    protected _height: number

    constructor(width: number, height: number) {
        this._width = width
        this._height = width
    }

    get height() {
        return this._height
    }
    get width() {
        return this._width
    }

    set height(height: number) {
        this._height = height
    }
    set width(width: number) {
        this._width = width
    }

    getArea(): number {
        return this._height * this._width
    }

}


class Square extends Rectangle {
    get width(): number {
        return this._width
    }

    get height(): number {
        return this._height
    }

    set height(height: number) {
        this._height = this._width = height // changing both width & height
    }
    set width(width: number) {
        this._height = this._width = width // changing both width & height
    }

}
 
function increaseRectangleWidth(rectangle: Rectangle, byAmount: number) {
    rectangle.width += byAmount
}


const rectangle: Rectangle = new Rectangle(5, 5)
const square: Square = new Square(5, 5)

console.log(rectangle.getArea());
console.log(square.getArea());

/**
 * LSP Violation Indication : Can't replace object 'rectangle' (superclass) with 'square' (subclass)
 * 
 * since the results would be different
 * */

increaseRectangleWidth(rectangle, 5);
increaseRectangleWidth(square, 5);

console.log(rectangle.getArea()); // Expected : 50, Got 50 (V)

// LSP violation, increaseRectangleWidth() changes both width and height of the square, unexpected behavior 

console.log(square.getArea());
