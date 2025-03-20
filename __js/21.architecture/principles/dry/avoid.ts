interface Product {
    id: number;
    name: string;
    price: number;
}

function getProductName(product: Product): string {
    return product.name;
}

function getProductPrice(product: Product): number {
    return product.price;
}
