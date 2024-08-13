import { useEffect, useState } from "react"

export const useHasFocus = () => {

    const [hasFocus, setHasFocus] = useState(false)

    useEffect(() => {

        const handleBlur = ()=> setHasFocus(false)
        const handleFocus = ()=> setHasFocus(true)

        window.addEventListener("blur", handleBlur)
        window.addEventListener("focus", handleFocus)

        return () => {
            window.removeEventListener("blur", handleBlur)
            window.removeEventListener("focus", handleFocus)
        }
    }, [])

    return hasFocus

}