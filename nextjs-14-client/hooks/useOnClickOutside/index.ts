import { useEffect } from "react"

export const useOnClickOutside = (ref: any, callback: (e: Event) => {}) => {

    useEffect(() => {

        const listener = (event: Event) => {
            /******
             * contains is the method of element
             * *****/ 
            if (!ref.current || ref.current.contains(event.target)) {
                return
            }
            /*****
             * this is the main part, here we are passing event to callback
             * ***/ 
            callback(event)
        }

        document.addEventListener("mousedown", listener)
        document.addEventListener("touchstart", listener)

        return () => {
            document.removeEventListener("mousedown", listener)
            document.removeEventListener("touchstart", listener)
        }
    }, [ref])

}