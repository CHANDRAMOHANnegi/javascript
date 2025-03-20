import { Outlet } from "react-router-dom"
import { Header } from "./components/header/header"
import { ShoppingProvider } from "./context/app-context/context"
import { FilterProvider } from "./context/filter-context/context"
import { CartProvider } from "./context/cart-context/context"

export const AppLayout = () => {
  return (
    <ShoppingProvider>
      <FilterProvider>
        <CartProvider>
          <div className="p-6">
            <Header />
            <main>
              <Outlet />
            </main>
          </div>
        </CartProvider>
      </FilterProvider>
    </ShoppingProvider>
  )
}
