import { Link } from 'react-router-dom'
import { useCartService } from '../../../context/cart-context/context'

export const CartStateIcon = () => {
    const cart = useCartService()
    const totalCartItem = Object.values(cart.state.products).length
    return (
        <Link to={"/cart"}>
            <button className="px-4 py-2 bg-slate-500 text-white rounded-sm">
                Cart ({totalCartItem})
            </button>
        </Link>
    )
}
