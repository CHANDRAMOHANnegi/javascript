/**
 * LSP -> Liskov's substitution principle
 * Object of super class , should be replaced by object of sub class
 * 
 * without affecting correctness of the program 
 * 
 * */ 

abstract class Shape {
    public abstract getArea(): number
}

class RRectangle extends Shape {
    private _width: number
    private _height: number

    constructor(width: number, height: number) {
        super()
        this._width = width
        this._height = height
    }

    public getArea(): number {
        return this._width * this._height
    }

}

class SSquare extends Shape {
    private _side: number
    constructor(side: number) {
        super()
        this._side = side
    }

    public getArea(): number {
        return this._side * this._side
    }

}

function displayArea(shape:Shape):void {
    console.log(shape.getArea());
}

const rrectangle: RRectangle = new RRectangle(5,10)
const ssquare: SSquare = new SSquare(5)

displayArea(rrectangle)
displayArea(ssquare)