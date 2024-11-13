export type ProductType = {
    "id": number,
    "title": string,
    "description": string,
    "price": number,
    "rating": number,
    "category": string,
    "thumbnail": string,
    "inStock": boolean
}

export type CartProductType = ProductType & { cart_qty?: number }