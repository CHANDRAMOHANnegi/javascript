interface Product {
    id: number;
    name: string;
    price: number;
}


function getProductProperty<T extends keyof Product>(
    product: Product,
    property: T,
): Product[T] {
    return product[property];
}