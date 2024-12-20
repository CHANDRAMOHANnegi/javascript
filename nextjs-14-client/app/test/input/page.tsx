"use client"

import useDebounce from '@/hooks/useDebounce/useDebounce'
import React, { ChangeEvent, useCallback, useState } from 'react'

const Input = () => {
    const [inputValue, setInputValue] = useState("")
    const [counter, setcounter] = useState(0)

    const getData = useCallback((text: string) => {
        console.log('fetching data...', text,counter);
    },[])

  
    setTimeout(() => {
        setcounter(co=>co+1)
    }, 5000);
    

    const debouncedSearch = useDebounce(getData, 1000)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
        debouncedSearch(event.target.value)
    }

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Type here..."
            />
        </div>
    )
}

export default Input