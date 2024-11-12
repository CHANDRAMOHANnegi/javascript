import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./components/app-layout";
import { Home } from "./components/home";

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    }
]);

export const EcomApp = () => {
    return (
        <RouterProvider router={router} />
    );
};

