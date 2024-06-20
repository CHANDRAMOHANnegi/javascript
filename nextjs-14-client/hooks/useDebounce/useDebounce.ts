import { useEffect, useRef, useState } from "react";

export const  useDebounce = (fn: () => void, delay: number, immediate?: boolean) => {
  const timerId = useRef<ReturnType<typeof setTimeout>>()

  const debouncedFn = () => {
    let callNow = immediate && !timerId.current
    
    clearTimeout(timerId.current)

    timerId.current = setTimeout(() => {

      if(!immediate){
        fn()
      }

    }, delay)

    if(callNow){
      fn()
    }
  }


  return debouncedFn
};

export default useDebounce;
