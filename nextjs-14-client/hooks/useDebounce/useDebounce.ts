import { useCallback, useRef } from "react";

export const useDebounce = (fn: () => void, delay: number, immediate?: boolean) => {
  const timerId = useRef<ReturnType<typeof setTimeout>>()

  const debouncedFn = useCallback((...args) => {
    let callNow = immediate && !timerId.current

    clearTimeout(timerId.current)

    timerId.current = setTimeout(() => {

      if (!immediate) {
        fn(...args)
      }

    }, delay)

    if (callNow) {
      fn()
    }
  }, [fn, delay, immediate])

  return debouncedFn
};

export default useDebounce;
