import { useEffect, useRef } from "react";

export function usePrevious<T>(currVal: T) {

    const previous = useRef<T>();

    useEffect(() => {
        previous.current = currVal
    }, [currVal])

    return previous.current
}