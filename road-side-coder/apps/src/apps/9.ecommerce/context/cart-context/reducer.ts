
export const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART": {
            const product = action.payload
            state["products"][product.id] = { ...product, cart_qty: 1 }
            return {
                ...state,
            }
        }
        case "REMOVE_FROM_CART": {
            delete state["products"][action.payload.id]
            return {
                ...state,
            }
        }
        case "EDIT_CART_PRODUCT": {
            const product = action.payload
            const new_cart_quantity = product.cart_qty
            if (new_cart_quantity <= 0) {
                delete state["products"][action.payload.id]
            } else {
                state["products"][product.id] = { ...product, cart_qty: new_cart_quantity }
            }
            return {
                ...state,
            }
        }

        default:
            return { ...state }
    }
}