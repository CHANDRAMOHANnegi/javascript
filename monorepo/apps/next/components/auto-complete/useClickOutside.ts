import { useEffect } from 'react'

export const useClickOutside = (elementRef: HTMLElement | null, callback: (event: Event) => void) => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      console.log(event);
      
      if (elementRef) {
        if (event?.target instanceof HTMLElement && elementRef.contains(event.target)) {
          console.log("inside");
          
          return
        }
        callback(event)
      }

    }

    document.addEventListener("mousedown", handleClick)
    return () => {
      document.removeEventListener("mousedown", handleClick)
    }
  }, [elementRef])

  return null
}
