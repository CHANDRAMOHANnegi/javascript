import { useRef, useLayoutEffect, useMemo } from "react";

function debounce<T>(fn: T, delay: number) {
    let timer: ReturnType<typeof setTimeout>

    return function (...args) {
        const context = this;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, delay);
    };
}

function useDebounce<T extends (...args: any[]) => void>(
    callback: T,
    delay: number
): T {
    const callbackRef = useRef(callback);

    useLayoutEffect(() => {
        callbackRef.current = callback;
    });

    return useMemo(
        () =>
            debounce((...args: Parameters<T>) => callbackRef.current(...args), delay),
        [delay]
    ) as T;
}

export default useDebounce;
