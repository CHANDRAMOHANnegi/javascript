import { createContext, ReactElement, useContext, useReducer } from "react"
import { FILTER_INITIAL_STATE } from "./constant"
import { filterReducer } from "./reducer"

export type FilterState = {
    stock: {
        apply: boolean
    },
    price: {
        apply: boolean,
        min_price: number,
        max_price: number,
        asc: boolean
    },
    rating: {
        apply: boolean,
        rate: number
    },
    searchQuery: string
}

type valueof<T> = T[keyof T]

export type ActionType = {
    type: string,
    payload: valueof<FilterState>
}


export type FilterContextType = {
    state?: FilterState,
    dispatch?: (action) => void
}

const FilterContext = createContext<FilterContextType>({})

export const FilterProvider = ({ children }: { children: ReactElement }) => {
    const [state, dispatch] = useReducer(filterReducer, FILTER_INITIAL_STATE)

    return (
        <FilterContext.Provider value={{ state, dispatch }}>
            {children}
        </FilterContext.Provider>
    )
}


export const useFilterService = () => useContext(FilterContext)