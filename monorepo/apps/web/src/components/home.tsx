import { lazy, Suspense, useState, useTransition } from "react"
// import { sum } from '../utils/sum'
// import { AdminData } from "./AdminData"
// https://www.youtube.com/watch?v=JU6sl_yyZqs

const wait = () => new Promise((res => setTimeout(res, 1000)))
const LazyAdminData = lazy(() => wait().then(() => import("./AdminData").then(module => ({ default: module.AdminData }))))

export const Home = () => {
    const [isAdmin, setIsAdmin] = useState(false)

    const [isPending, startTransition] = useTransition()

    return <>
        <h1>Home page</h1>
        <button onClick={() => {
            import("../utils/sum").then(module => {
                alert(module.sum(2, 2))
            }).catch(err => {
                console.log(err);
            })
            // alert(sum(2, 2))
        }}> Add 2 + 2</button>
        <br />
        <br />
        <button onClick={() => {
            startTransition(() => {
                setIsAdmin(prev => !prev)
            })
        }}> Toggle Admin</button>
       <Suspense fallback={"loading"}> {isAdmin ? <LazyAdminData />  : <h2>Not admins</h2>}</Suspense>
    </>
}

export default Home