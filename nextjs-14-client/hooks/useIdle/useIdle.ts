import { useEffect, useRef, useState } from "react";

export function useIdle(time:number) {
    const [idle, setIdle] = useState<boolean>(false)

    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const mouseEvent =()=>{
        goActive()
    }

    const keyEvent =()=>{
        goActive()
    }

    const goInactive=()=>{
        setIdle(true)
    }

    const goActive=()=>{
        setIdle(false)
        startTimer()
    }

    const startTimer =()=>{
        timerRef.current = setTimeout(goInactive, time);
    }

    const resetTimer =()=>{
        clearTimeout(timerRef.current)
        goActive()
    }

    const setUp = () =>{
        clearTimeout(timerRef.current)
        startTimer()
        document.addEventListener("mousedown",mouseEvent)
        document.addEventListener("mouseup",mouseEvent)
        document.addEventListener("pointermove",mouseEvent)

        document.addEventListener("scroll",mouseEvent)
        document.addEventListener("touchmove",mouseEvent)

        document.addEventListener("keydown",keyEvent)
        document.addEventListener("keypress",keyEvent)
        document.addEventListener("keyup",keyEvent)


        window.addEventListener("blur",mouseEvent)
        window.addEventListener("focus",mouseEvent)

    }

    const reset = () =>{
        document.removeEventListener("mousedown",mouseEvent)
        document.removeEventListener("mouseup",mouseEvent)
        document.removeEventListener("mousemove",mouseEvent)

        document.addEventListener("scroll",mouseEvent)
        document.addEventListener("touchmove",mouseEvent)

        document.removeEventListener("keydown",keyEvent)
        document.removeEventListener("keypress",keyEvent)
        document.removeEventListener("keyup",keyEvent)


        window.removeEventListener("blur",mouseEvent)
        window.removeEventListener("focus",mouseEvent)

        clearTimeout(timerRef.current)
    }

    useEffect(() => {
        setUp()
      return () => {
        reset()
      }
    }, [time])

    return idle
}