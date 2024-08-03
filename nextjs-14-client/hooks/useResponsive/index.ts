import { use, useEffect, useState } from "react"
import useDebounce from "../useDebounce/useDebounce"

type DeviceType = {
    isMobile: boolean
    isDesktop: boolean
    isTablet: boolean
}

const [MOBILE, DESKTOP] = [768, 990]

export const useResponsive = () => {
    const [type, setType] = useState<DeviceType>()

    function resizeHandler() {
        const isMobile = window.innerWidth < MOBILE
        const isTablet = window.innerWidth >= MOBILE && window.innerWidth <= DESKTOP
        const isDesktop = window.innerWidth > DESKTOP
        setType({ isDesktop, isMobile, isTablet })
    }

    /***
     * Main point
     * */
    const debouncedHandler = useDebounce(resizeHandler, 500)

    function setUp() {
        /******
         * listener is added to window, not to document
         * */
        window.addEventListener("resize", debouncedHandler)
    }

    function cleanUp() {
        window.removeEventListener("resize", debouncedHandler)
    }

    useEffect(() => {
        // initial call
        resizeHandler()

        setUp()
        
        return () => {
            cleanUp()
        }
    }, [])


    return { ...type }
}