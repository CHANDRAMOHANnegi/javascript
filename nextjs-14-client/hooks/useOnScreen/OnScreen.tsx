"use client"
import { useRef } from "react"
import { useOnScreen } from "."

const Element = ({ number }: { number: number }) => {
    const ref = useRef<HTMLDivElement>(null)

    const isVisible = useOnScreen(ref)

    return (
        <div ref={ref} className="h-10" style={{height:100,backgroundColor:"red",border:"1px solid"}}>
            {number}
            {isVisible ? " I am on screen" : " I am invisible"}
        </div>
    )
}

export const OnScreen = () => {
    const arr = []

    for (let i = 0; i < 20; i++) {
        arr.push(<Element key={i} number={i} />)
    }

    return arr
}

export default OnScreen