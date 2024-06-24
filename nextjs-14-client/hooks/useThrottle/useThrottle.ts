import { useRef } from "react"

export const useThrottle = (fn: () => void, delay: number, immediate?: boolean) => {
    const timerId = useRef<ReturnType<typeof setTimeout>>()

    const throttled = () => {
        
        if (timerId.current) {

        } else {
            timerId.current = setTimeout(() => {
                fn()
            }, delay)
        }
    }

    return throttled
}