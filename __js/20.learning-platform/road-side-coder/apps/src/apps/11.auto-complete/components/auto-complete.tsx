import React, { CSSProperties, ReactElement, useCallback, useEffect, useRef, useState } from "react"
import SuggestionsList from "./suggestions-list"
import useCache from "../hooks/use-cache"

export type ItemProp = {
    id: string,
    label: string,
}

export type InputProp = { text: string, setText: (a: string) => void }

export type EventProps = {
    onInputFocus?: () => void
    onInputBlur?: () => void
    onInputClick?: () => void
    onChange: (s: string) => {}
}

export type AutoCompleteProps = {
    containerStyle?: string
    defaultSelected?: string
    data: ItemProp[]
    inputStyle: CSSProperties
    placeHolder?: string
    fetchSuggestion: (s: string) => void
    dataKey: string
    customLoading?: ReactElement
    onSelect: (a: ItemProp) => void
    caching?: boolean
} & EventProps

function debounce(fn, delay = 500) {
    let timerId
    return (...args) => {
        clearTimeout(timerId)
        timerId = setTimeout(() => {
            fn(...args)
        }, delay)
    }
}

const AutoComplete: React.FC<AutoCompleteProps> = ({
    data,
    inputStyle,
    placeHolder = "",
    onInputFocus,
    onInputBlur,
    onInputClick,
    onChange,
    fetchSuggestion,
    dataKey,
    onSelect,
    caching = true
}) => {
    const [inputValue, setInputValue] = useState("")
    const [selectedIndex, setSelectedIndex] = useState(-1)
    const [suggestions, setSuggestions] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const suggestionsListRef = useRef<HTMLUListElement>(null)

    const { setCache, getCache } = useCache("autocomplete", 3600)

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
        onChange(event.target.value)
    }

    const getSuggestion = async (query: string) => {
        setError(null)
        const cachedSuggestion = getCache(query)
        if (cachedSuggestion && query) {
            setSuggestions(cachedSuggestion)
        } else {
            setLoading(true)
            try {
                let result;
                if (data.length) {
                    result = data.filter(({ label }) => label.toLowerCase().includes(query.toLowerCase()))
                } else if (fetchSuggestion) {
                    result = await fetchSuggestion(query)
                }
                setCache(query, result)
                setSuggestions(result)
            } catch (error) {
                setError("failed to load suggestion")
                setSuggestions([])
            } finally {
                setLoading(false)
            }
        }
    }

    const getSuggestionDebounced = useCallback(debounce(getSuggestion), [])

    useEffect(() => {
        setSelectedIndex(-1)
        if (inputValue.length > 1) {
            getSuggestionDebounced(inputValue)
        } else {
            setSuggestions([])
        }
    }, [inputValue, getSuggestionDebounced])

    const handleSuggestionClick = (suggestion: ItemProp) => {
        setInputValue(dataKey ? suggestion[dataKey] : dataKey)
        onSelect(suggestion)
        setSuggestions([])
    }

    /*****
     * 
     * scrollIntoView
     * scrolls child inside container
     * 
     * ****/

    const scrollIntoView = (index) => {
        if (suggestionsListRef.current) {
            const suggestionElements = suggestionsListRef.current.getElementsByTagName('li')
            if (suggestionElements[index]) {
                suggestionElements[index].scrollIntoView({
                    behavior: "smooth",
                    block: "nearest"
                })
            }
        }
    }

    const handleKeyDown = (event) => {
        switch (event.key) {
            case "ArrowDown":
                setSelectedIndex(prevIndex => {
                    const newIndex = (prevIndex + 1) % suggestions.length
                    scrollIntoView(newIndex)
                    return newIndex
                })
                // scrollIntoView(selectedIndex)
                break

            case "ArrowUp":
                setSelectedIndex(prevIndex => {
                    const newIndex = (suggestions.length + prevIndex - 1) % suggestions.length
                    scrollIntoView(newIndex)
                    return newIndex
                })
                break

            case "Enter": {
                if (selectedIndex >= 0 && selectedIndex < suggestions.length) {
                    handleSuggestionClick(suggestions[selectedIndex])
                }
                break
            }
        }
    }

    return (
        <div className="relative w-[300px] font-serif m-4 border-2">

            <input
                type="text"
                value={inputValue}
                placeholder={placeHolder}
                style={inputStyle}
                onFocus={onInputFocus}
                onBlur={onInputBlur}
                onClick={onInputClick}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                className="w-full p-2 box-border border-2 border-green-500 text-base"
                aria-autocomplete="list"
                aria-controls="suggestions-list"
                aria-activedescendant={`suggestion-${selectedIndex}`}

            />

            {error && <><div className="p-2 text-red-500">{error}</div></>}
            {loading && <><div className="p-2 text-gray-300">{'loading...'}</div></>}

            <SuggestionsList
                dataKey={dataKey}
                selectedIndex={selectedIndex}
                onSuggestionClick={handleSuggestionClick}
                suggestions={suggestions}
                highLight={inputValue}
                ref={suggestionsListRef}
            />

        </div>
    )
}

export default AutoComplete