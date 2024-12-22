import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { Input } from './input'
import { List } from './list'
import { mockData, SEARCH_URL } from './constant'
import { ListItemType } from './types'
import { useClickOutside } from './useClickOutside'

export const AutoComplete = () => {
    const [items, setItems] = useState<ListItemType[]>(mockData)
    const [text, setText] = useState("")
    const [showItems, setShowItems] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    const [CACHE, setCache] = useState({})

    useClickOutside(containerRef.current, (event) => {
        console.log(event);
        setShowItems(false)
    })


    const fetchData = async (text: string) => {
        let results = []
        if (CACHE[text as keyof typeof CACHE]) {
            results = CACHE[text as keyof typeof CACHE]
        } else {
            const response = await fetch(SEARCH_URL + text)
            const jsonData = await response.json()
            results = jsonData[1].map((d: string) => ({ id: Date.now(), label: d }))
        }
        setItems(results)
        setShowItems(true)
    }

    useEffect(() => {
        fetchData(text)
        return () => {
        }
    }, [text])


    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value)
    }

    const handleInputFocus = (event: ChangeEvent<HTMLInputElement>) => {
        text && items.length && setShowItems(true)
    }

    return (
        <div className='' ref={containerRef}>
            <Input onChange={handleChange} onFocus={handleInputFocus} />
            {showItems && <List items={items} />}
        </div>
    )
}
