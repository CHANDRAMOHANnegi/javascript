"use client"
import { useRef } from "react"
import { useLockedBody } from "."

export const LockedBody = () => {
    const ref = useRef()

    const [locked, setLocked] = useLockedBody(ref)

    return <>
        <div style={{ height: "200vh" }} id="abc" ref={ref}>
            <button onClick={() => {
                setLocked(!locked)
            }}>
                {locked ? "unlock screen" : "lock scroll"}
            </button>
        </div>

    </>
}