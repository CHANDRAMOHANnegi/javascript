import { CartProductType } from "../../types"

type CartProps = {
    product: CartProductType,
    cart_qty?: number
    addToCart: () => void
    editCart: (newQty: number) => void
    removeFromCart: () => void
    inStock?: boolean
}

const btnStyle = "bg-orange-500 rounded-sm py-1 px-3"

const OutOfStock = () => {
    return <>
        <span className={btnStyle}>Out Of Stock</span>
    </>
}

const AddToCart = ({ addToCart }: { addToCart: () => void }) => {
    return <>
        <button
            className={btnStyle}
            onClick={() => addToCart()}>Add To Cart</button>
    </>
}

const EditToCart = ({ editCart, cart_qty }: { editCart: (newQty: number) => void, cart_qty: number }) => {
    return <>
        <button
            className={btnStyle}
            onClick={() => editCart(cart_qty - 1)}>-</button>
        <span className="w-[20px] inline-block text-center mx-2">{cart_qty}</span>
        <button
            className={btnStyle}
            onClick={() => editCart(cart_qty + 1)}>+</button>
    </>
}


export const CartButton = ({ inStock = true, cart_qty = 0, addToCart, editCart }: CartProps) => {

    return (
        <div>
            {!inStock ? <OutOfStock /> :
                cart_qty === 0 ?
                    <AddToCart addToCart={() => addToCart()} />
                    :
                    <EditToCart editCart={editCart} cart_qty={cart_qty} />}
        </div>
    )
}
