import { StarRating } from '../../../7.star-rating/star-rating'
import { MAX_RATING } from '../../constants/CONSTANTS'
import { useCartService } from '../../context/cart-context/context'
import { CartProductType, ProductType } from '../../types'
import { CartButton } from '../cart-button/cart-button'

export const ProductCard = ({ product }: { product: ProductType }) => {
    const { state: cartState, dispatch: cartDispatch } = useCartService()
    const cartProduct = cartState.products[product.id] as CartProductType

    const handleAddToCart = () => {
        cartDispatch({
            type: "ADD_TO_CART",
            payload: { ...product }
        })
    }

    const handleEditCart = (newQty) => {
        cartDispatch({
            type: "EDIT_CART_PRODUCT",
            payload: { ...cartProduct, cart_qty: newQty }
        })
    }

    const handleRemoveFromCart = () => {
        cartDispatch({
            type: "ADD_TO_CART",
            payload: { ...product }
        })
    }

    return (
        <div key={product.id} className='product_single'>
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
            <CartButton
                inStock={product.inStock}
                product={product}
                cart_qty={cartProduct?.cart_qty}
                addToCart={handleAddToCart}
                editCart={handleEditCart}
                removeFromCart={handleRemoveFromCart}
            />
        </div>
    )
}
