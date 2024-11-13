import { useMemo, useState } from "react";
import { Pagination } from "../../../10.pagination/components/pagination/pagination";
import { ProductList } from "../../../10.pagination/components/product-list/product-list";
import { useShoppingCartService } from "../../context/app-context/context"
import { PRODUCT_PER_PAGE } from "../../constants/CONSTANTS";
import { CartFilters } from "../../components/filters/filters";
import { useFilterService } from "../../context/filter-context/context";
import { filterItemsByKey } from "../../utils/filter-utils";
import { ProductCard } from "../../components/product-card/product-card";

export const Home = () => {
    const { state: { products } = {} } = useShoppingCartService()
    const { state: { price, stock, rating, searchQuery } = {} } = useFilterService()

    const [page, setPage] = useState(1)

    const filteredProducts = useMemo(() => {
        let filteredProducts = products
        if (filteredProducts) {
            if (price.apply) {
                const { asc } = price
                filteredProducts = filterItemsByKey(filteredProducts, 'price', asc)
            }

            if (stock.apply) {
                filteredProducts = filteredProducts.filter(product => product.inStock)
            }

            if (rating.apply) {
                filteredProducts = filteredProducts.filter(product => product.rating >= rating.rate)
            }

            if (searchQuery) {
                filteredProducts = filteredProducts.filter(product => product.title.toLowerCase().includes(searchQuery))
                console.log(searchQuery, filteredProducts);
            }
            setPage(1)
            return filteredProducts
        }
        return []
    }, [price, products, stock, rating, searchQuery])

    const totalPages = Math.floor(filteredProducts?.length / PRODUCT_PER_PAGE)

    const newProducts = filteredProducts?.slice((page - 1) * PRODUCT_PER_PAGE, page * PRODUCT_PER_PAGE)

    return (
        <>
            <div className="flex py-9">
                <CartFilters />
                <ProductList products={newProducts}
                    renderItem={(item) => <ProductCard product={item} />} />
            </div>
            {totalPages > 0 && <Pagination
                totalPages={totalPages}
                currentPage={page}
                setPage={setPage}
            />}
        </>

    )
}
