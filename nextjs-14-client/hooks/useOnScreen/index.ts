"use client"
import { useEffect, useState } from "react"

export const useOnScreen = (ref: any) => {

    const [isInterSecting, setIsInterSecting] = useState(false)

    const observer = new IntersectionObserver(([entry]) => {
        setIsInterSecting(entry.isIntersecting)
    }, {
        threshold: 1.0
    })

    useEffect(() => {
        observer.observe(ref.current)
        return () => {
            observer.disconnect()
        }
    }, [ref])

    return isInterSecting
}


/*****
 * 
 * with client-bounding-rect
 * 
 * ***/

export const useOnScreen2 = (ref: any) => {

    const [isInterSecting, setIsInterSecting] = useState(false)

    const handleScroll = () => {
        const offset = 50
        const top = ref.current.getBoundingClientRect().top

        const isInViewPort = top + offset >= 0 && top - offset <= window.innerHeight

        setIsInterSecting(isInViewPort)

    }

    useEffect(() => {
        handleScroll()

        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [ref])

    return isInterSecting
}