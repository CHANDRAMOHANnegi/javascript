"use client"

import React, { useEffect, useMemo, useRef, useState } from 'react'

const OFFSET = 10
const NUM_OF_ELEMENT_TO_ADD = 50

export const InfiniteScroll = () => {
    const [count, setCount] = useState(50)

    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleScroll = () => {
            const dimension = scrollRef.current?.getBoundingClientRect?.()
            if (dimension) {
                if (dimension.bottom - OFFSET <= window.innerHeight) {
                    setCount(count => count + NUM_OF_ELEMENT_TO_ADD)
                }
            }
        }

        document.addEventListener("scroll", handleScroll)
        return () => {
            document.removeEventListener("scroll", handleScroll)
        }
    }, [])

    const elements = useMemo(() => {
        const elements = []
        for (let i = 0; i < count; i++) {
            elements.push(<div key={i} className='border p-5'>
                {i}
            </div>)
        }
        return elements
    }, [count])
    return (
        <div ref={scrollRef}>{elements}</div>
    )
}

export default InfiniteScroll