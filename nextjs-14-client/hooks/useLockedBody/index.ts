import { useEffect, useLayoutEffect, useState } from "react"

export const useLockedBody = (ref: any, initiallyLocked = false) => {

    const [locked, setLocked] = useState(initiallyLocked)
    console.log(locked);

    useLayoutEffect(() => {
        if (!locked) {
            return
        }

        // save original body style
        const originalOverflow = document.body.style.overflow
        const originalPaddingRight = document.body.style.paddingRight

        console.log(originalPaddingRight);


        // lock body scroll
        document.body.style.overflow = "hidden"

        // get the scrollBar width
        const root = ref.current
        console.log({root});
        
        const scrollBarWidth = root ? root.offsetWidth - root.scrollWidth : 0

        if (scrollBarWidth) {
            document.body.style.paddingRight = `${scrollBarWidth}px`
        }

        return () => {
            document.body.style.overflow = originalOverflow

            if (scrollBarWidth) {
                document.body.style.paddingRight = originalPaddingRight
            }

        }
    }, [locked])

    useEffect(() => {
        if (locked !== initiallyLocked) {
            setLocked(initiallyLocked)
        }
    }, [initiallyLocked])

    return [locked, setLocked]
}