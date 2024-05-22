/**
 * S -> single responsibility principal
 * each class should have one responsibility
 * 
 * 
 * **/ 

export enum Color {
    BLUE = "blue",
    GREEN = 'green',
    RED = 'red'
}

export enum Size {
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "Large"
}

export class Product {
    #_name: string
    #_color: Color
    #_size: Size

    constructor(name: string, color: Color, size: Size) {
        this.#_name = name
        this.#_color = color
        this.#_size = size
    }

    public get name(): string {
        return this.#_name
    }

    public get color(): string {
        return this.#_color
    }

    public get size(): string {
        return this.#_size
    }

}

/**
 * 
 * Violation Of SINGLE RESPONSIBILITY PRINCIPLE 
 * 
 * The Product manager class is responsible for 
 * 
 * "creation"  and "storage" of  products
 * 
 * violating single responsibility principle
 * 
 * **/

class ProductManager {
    private _products: Product[] = []

    createProduct(name: string, color: Color, size: Size): Product {
        return new Product(name, color, size)
    }

    storeProduct(product: Product): void {
        this._products.push(product)
    }

    getProducts(): Product[] {
        return this._products
    }

}

const productManager = new ProductManager()

const product = productManager.createProduct("Product 1", Color.BLUE, Size.LARGE)

productManager.storeProduct(product)

const allProduct = productManager.getProducts()

/**
 * 
 * Resolution
 * 
 * separating the handling of creation and storage of products
 * 
 * into two distinct classes
 * 
 * **/


class PProductManager {
    createProduct(name: string, color: Color, size: Size): Product {
        return new Product(name, color, size)
    }
}

class ProductStorage {
    private _products: Product[] = []

    storeProduct(product: Product): void {
        this._products.push(product)
    }

    getProducts(): Product[] {
        return this._products
    }

}

const pproductManager = new PProductManager()
const productStorage = new ProductStorage()

const pproduct = pproductManager.createProduct("Product 1", Color.BLUE, Size.LARGE)

productStorage.storeProduct(pproduct)

const allPproducts = productStorage.getProducts()