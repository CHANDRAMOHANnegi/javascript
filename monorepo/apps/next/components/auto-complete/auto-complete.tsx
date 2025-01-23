import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { Input } from './input'
import { List } from './list'
import { CACHE_CLEAR_TIME, mockData, SEARCH_DEBOUNCE_TIME, SEARCH_URL } from './constant'
import { ListItemType } from './types'
import { useClickOutside } from './useClickOutside'

export const AutoComplete = () => {
    const [items, setItems] = useState<ListItemType[]>(mockData)
    const [text, setText] = useState("")
    const [showItems, setShowItems] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    const [CACHE, setCache] = useState({})

    useClickOutside(containerRef.current, () => {
        setShowItems(false)
    })

    const fetchData = async (text: string) => {
        let data = []
        let inCache = (text in CACHE)

        if (inCache) {
            const { results, time } = CACHE[text as keyof typeof CACHE]
            data = results
            inCache = time + CACHE_CLEAR_TIME >= Date.now()
        }

        if (!inCache) {
            const response = await fetch(SEARCH_URL + text)
            const jsonData = await response.json()
            data = jsonData[1].map((d: string) => ({ id: Date.now(), label: d }))
            setCache({ ...CACHE, [text]: { results: data, time: Date.now() } })
        }

        setItems(data)
        if(!showItems) setShowItems(true)
    }

    useEffect(() => {
        // simple debounce
        const timerId = setTimeout(() => {
            fetchData(text)
        }, SEARCH_DEBOUNCE_TIME);
        return () => {
            clearTimeout(timerId)
        }
    }, [text])

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value)
    }

    const handleInputFocus = (event: ChangeEvent<HTMLInputElement>) => {
        if(text && items.length) setShowItems(true)
    }

    return (
        <div className='relative' ref={containerRef}>
            <Input onChange={handleChange} onFocus={handleInputFocus} />
            {showItems &&
                <div className='absolute max-h-[200px] overflow-scroll bg-white'>
                    <List items={items} />
                </div>
            }
        </div>
    )
}
