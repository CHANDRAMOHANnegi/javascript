"use client"
import { Albums, Photos, Todos } from "./ProductList"

export const Page = () => {

    return <>
        <div className="App">
            <Todos />
            <div className="h-[200px] bg-slate-500" />
            <Photos />
            <div className="h-[200px] bg-slate-500" />
            <Albums />
        </div>
    </>
}

export default Page