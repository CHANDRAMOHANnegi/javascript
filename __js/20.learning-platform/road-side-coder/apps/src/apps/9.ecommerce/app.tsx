import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./app-layout";
import { Home } from "./pages/home/home";
import { Cart } from "./pages/cart/cart";

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            { path: "/cart", element: <Cart /> }
        ]
    }
]);

export const EcomApp = () => {
    return (
        <RouterProvider router={router} />
    );
};

