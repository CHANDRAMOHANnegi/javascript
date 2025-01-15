import { Suspense } from "react"
import { Link, Outlet } from "react-router-dom"

export const NavWrapper = () => {
    return (
        <>
            <nav style={{ display: "flex", gap: "1rem" }}>
                <Link to={"/"}>Home</Link>
                <Link to={"/store"}>Store</Link>
                <Link to={"/about"}>About</Link>
            </nav>
            <Suspense fallback={<>Loading...</>}>
                <Outlet />
            </Suspense>
        </>
    )
}
