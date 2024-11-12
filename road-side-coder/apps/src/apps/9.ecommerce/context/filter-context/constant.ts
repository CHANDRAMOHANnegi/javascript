export const FILTER_INITIAL_STATE = {
    stock: {
        apply: false
    },
    price: {
        apply: false,
        min_price: 0,
        max_price: Infinity,
        asc: false
    },
    rating: {
        apply: false,
        rate: 0
    },
    searchQuery:""
}
