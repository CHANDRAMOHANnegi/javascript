import { ProductList } from "../../../10.pagination/components/product-list/product-list"
import { ProductCard } from "../../components/product-card/product-card"
import { useCartService } from "../../context/cart-context/context"

export const Cart = () => {
  const cart = useCartService()
  const products = Object.values(cart.state.products)
  const totalValue = products.reduce((all, product) => all + product.price, 0)
  const totalCartItem = products.length
  return (
    <div className="py-9 flex flex-col gpa -5">
      <div className="text-2xl text-center"> Total : ${totalValue}</div>
      <div className="text-2xl text-center"> Total-tem {totalCartItem}</div>
      <ProductList
        products={products}
        renderItem={(product) => <ProductCard product={product} />}
      />
    </div>
  )
}
