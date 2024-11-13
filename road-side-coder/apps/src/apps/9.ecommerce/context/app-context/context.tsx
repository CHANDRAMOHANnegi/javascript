import { createContext, ReactElement, useContext, useEffect, useReducer } from "react"
import { shoppingCartReducer } from "./reducer"
import { APP_INITIAL_STATE } from "./constant"
import { ProductType } from "../../types"

type ActionType = "FETCH_PRODUCTS"
type StateType = { products: ProductType[] }

type ContextProp = {
    state?: StateType
    dispatch?: (action: { type: ActionType, payload: unknown }) => void
}

const ShoppingContext = createContext<ContextProp>({})

export const ShoppingProvider = ({ children }: { children: ReactElement }) => {
    const [state, dispatch] = useReducer(shoppingCartReducer, APP_INITIAL_STATE)

    const fetchProducts = async () => {
        const res = await fetch("./products.json")
        const data = await res.json()

        if (data?.products) {
            dispatch({
                type: "FETCH_PRODUCTS",
                payload: data.products
            })
        }
    }
    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <ShoppingContext.Provider value={{ state, dispatch }}>
            {children}
        </ShoppingContext.Provider>
    )
}


export const useShoppingCartService = () => useContext(ShoppingContext)