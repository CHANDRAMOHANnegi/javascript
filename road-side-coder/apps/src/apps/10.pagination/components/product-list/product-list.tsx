import { ReactElement } from "react";
import { ProductType } from "../../../9.ecommerce/types";
import "./style.css"

export const ProductList = ({ products = [], renderItem }: { products: ProductType[], renderItem: (item: ProductType) => ReactElement }) => {
    if (products?.length === 0)
        return null

    return (<div className='products-list'>
        {renderItem && products.map(renderItem)}
    </div>)
}