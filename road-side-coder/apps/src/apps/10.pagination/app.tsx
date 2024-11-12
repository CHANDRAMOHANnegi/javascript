import { useCallback, useEffect, useState } from 'react'
import './style.css'
import { Pagination } from './components/pagination/pagination'
import { ProductList } from './components/product-list/product-list'
import { CONSTANTS } from './constants/constants'

export const PaginationApp = () => {
    const [products, setProducts] = useState([])
    // console.log(products);

    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)

    const fetchProducts = useCallback(async () => {
        const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${CONSTANTS.ITEMS_PER_PAGE * (page - 1)}&select=title,price,thumbnail`)
        const data = await res.json()
        if (data?.products) {
            setProducts(data.products)
            setTotalPages(Math.floor(data.total / CONSTANTS.ITEMS_PER_PAGE))
        }
    }, [page])

    useEffect(() => {
        fetchProducts()
    }, [page, fetchProducts])

    console.log(totalPages);

    return (
        <>
            <ProductList products={products} />
            <Pagination
                currentPage={page}
                setPage={setPage}
                totalPages={totalPages}
                maxVisiblePages={5}
            />
        </>
    )
}
