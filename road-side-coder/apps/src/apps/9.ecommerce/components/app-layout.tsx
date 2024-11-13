import { Outlet } from "react-router-dom"
import { Header } from "./header/header"
import { ShoppingProvider } from "../context/cart-context/context"
import { FilterProvider } from "../context/filter-context/context"

export const AppLayout = () => {
  return (
    <ShoppingProvider>
      <FilterProvider>
        <div className="p-6">
          <Header />
          <main>
            <Outlet />
          </main>
        </div>
      </FilterProvider>
    </ShoppingProvider>
  )
}
