/**
 * O -> open close principal
 * 
 * Wite it Once
 * 
 * Open for Modification
 * 
 * **/
import { Color, Product, Size } from "../1.s/1";

class Inventory {
    private _products: Product[] = []

    /**
     * add
     */
    public add(product: Product): void {
        this._products.push(product)
    }

    addArray(products: Product[]) {
        for (const product of products) {
            this.add(product)
        }
    }

    /**
     * get products
     */
    public get products(): Product[] {
        return this._products
    }

}

class ProductsFilter {
    byColor(inventory: Inventory, color: Color): Product[] {
        return inventory.products.filter(p => p.color === color)
    }

    /**
     * added later
     * */

    bySize(inventory: Inventory, size: Size): Product[] {
        return inventory.products.filter(p => p.size === size)
    }
}


/****
 * 
 * correct way to add filter 
 * 
 * 
 * */

abstract class Specification {
    public abstract isValid(product: Product): boolean
}

class ColorSpecification extends Specification {
    private _color: Color

    constructor(color) {
        super()
        this._color = color
    }

    public isValid(product: Product): boolean {
        return product.color === this._color
    }
}

class SizeSpecification extends Specification {
    private _size: Size

    constructor(color) {
        super()
        this._size = color
    }

    public isValid(product: Product): boolean {
        return product.size === this._size
    }
}

class AndSpecification extends Specification {
    private _specification: Specification[]

    constructor(specifications: Specification[]) {
        super()
        this._specification = specifications
    }
    public isValid(product: Product): boolean {
        return this._specification.every(specification => specification.isValid(product))
    }
}

class PProductsFilter {
    /**
     * filter
     */
    public filter(inventory: Inventory, specification: Specification): Product[] {
        return inventory.products.filter(product => specification.isValid(product))
    }
}

const p1 = new Product("Apple", Color.GREEN, Size.LARGE)
const p2 = new Product("Pear", Color.GREEN, Size.LARGE)
const p3 = new Product("Grapes", Color.GREEN, Size.LARGE)
const p4 = new Product("Blueberries", Color.GREEN, Size.LARGE)
const p5 = new Product("Watermelon", Color.GREEN, Size.LARGE)


const inventory = new Inventory()
inventory.addArray([p1, p2, p3, p4, p5])

const greenColor = new ColorSpecification(Color.GREEN)
const largeSize = new SizeSpecification(Size.LARGE)

const andSpec = new AndSpecification([greenColor, largeSize])

const productFilter = new PProductsFilter()

const filteredProducts = productFilter.filter(inventory,andSpec)

console.log(filteredProducts);



