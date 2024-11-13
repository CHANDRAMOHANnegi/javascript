import { createContext, ReactElement, useContext, useReducer } from "react"
import { cartReducer } from "./reducer"
import { CART_INITIAL_STATE } from "./constant"
import { ProductType } from "../../types"

type ActionType = "ADD_TO_CART" | "REMOVE_FROM_CART" | "EDIT_CART_PRODUCT"
type StateType = { products: Record<string, ProductType> }

export type CartContextProp = {
    state?: StateType
    dispatch?: (action: { type: ActionType, payload?: unknown }) => void
}

const CartContext = createContext<CartContextProp>({})

export const CartProvider = ({ children }: { children: ReactElement }) => {
    const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE)

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartService = () => useContext(CartContext)