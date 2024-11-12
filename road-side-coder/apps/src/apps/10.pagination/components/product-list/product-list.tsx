import { StarRating } from "../../../7.star-rating/star-rating";
import { MAX_RATING } from "../../../9.ecommerce-filters/constants/CONSTANTS";
import { ProductType } from "../../../9.ecommerce-filters/types";
import "./style.css"

export const ProductList = ({ products = [] }: { products: ProductType[] }) => {
    // console.log(products);

    if (products?.length === 0)
        return null

    return (<div className='products-list'>
        {products
            .map(product => {
                return <div key={product.id} className='product_single'>
                    <img src={product.thumbnail} alt={product.title} />
                    <div className="flex">
                        <span className="ml-2 text-xs truncate overflow-ellipsis">
                            {product.title}
                        </span>
                        <span className="ml-2 text-xs">
                            ${product.price}
                        </span>
                    </div>
                    <div className="flex">
                        <span className="ml-2 text-xs">
                            {product.inStock ? "" : "Out of Stock"}
                        </span>
                        <StarRating rating={product.rating} size={MAX_RATING} />
                    </div>
                </div>
            })}
    </div>)
}