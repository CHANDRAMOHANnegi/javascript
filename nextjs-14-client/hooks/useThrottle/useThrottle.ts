import { useRef, useCallback } from "react";

/**
 * A custom hook to throttle a function call.
 *
 * @param fn - The function to throttle.
 * @param limit - The throttle interval in milliseconds.
 * @returns The throttled function.
 */
export const useThrottle = <T extends (...args: any[]) => void>(
    fn: T,
    limit: number
): ((...args: Parameters<T>) => void) => {
    const lastCallTime = useRef<number | null>(null);
    const timerId = useRef<ReturnType<typeof setTimeout> | null>(null);

    const throttledFn = useCallback(
        (...args: Parameters<T>) => {
            const now = Date.now();

            if (lastCallTime.current === null || now - lastCallTime.current >= limit) {
                fn(...args);
                lastCallTime.current = now;
                if (timerId.current) {
                    clearTimeout(timerId.current);
                    timerId.current = null;
                }
            } else if (!timerId.current) {
                const remainingTime = limit - (now - lastCallTime.current);
                timerId.current = setTimeout(() => {
                    fn(...args);
                    lastCallTime.current = Date.now();
                    timerId.current = null;
                }, remainingTime);
            }
        },
        [fn, limit]
    );

    return throttledFn;
};

export default useThrottle;
