import { FILTER_INITIAL_STATE } from "./constant"

export const filterReducer = (state, { payload, type }) => {
    switch (type) {
        
        case "SORT_BY_PRICE":
            // console.log('------>>>>',type,payload);
            return {
                ...state,
                price: {
                    apply: payload.apply,
                    min_price: payload.min_price,
                    max_price: payload.max_price,
                    asc: payload.asc,
                }
            }

        case "SORT_BY_RATING":
            return {
                ...state,
                rating: {
                    rate: payload.rate,
                    apply: payload.apply
                }
            }

        case "SORT_BY_QUERY":
            return {
                ...state,
                searchQuery: payload,
            }

        case "SORT_BY_STOCK":
            return {
                ...state,
                stock: {
                    apply: payload.apply,
                },
            }

        case "CLEAR_ALL_FILTERS":
            return {
                ...FILTER_INITIAL_STATE
            }

        default:
            return { ...state }
    }
}