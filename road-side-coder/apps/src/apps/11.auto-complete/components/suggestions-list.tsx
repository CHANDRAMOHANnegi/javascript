import { forwardRef } from "react"
import { ItemProp } from "./auto-complete"

const SuggestionsList = forwardRef<HTMLUListElement, {
    suggestions: ItemProp[],
    highLight?: string,
    dataKey: string
    onSuggestionClick: (a: ItemProp) => void
    selectedIndex: number
}>(({
    suggestions,
    onSuggestionClick,
    highLight,
    dataKey,
    selectedIndex
}, ref) => {

    const getHighlightedText = (text: string) => {
        const parts = text.split(new RegExp(`(${highLight})`, "gi"))
        // gi, g means global, i means case-insensitive, () are for group

        return parts.map((part: string, index) => {
            return part.toLowerCase() === highLight.toLowerCase()
                ? <b key={index}>{part}</b> : part
        })
    }

    return (
        <ul role="listbox"
            ref={ref}
            className={`
                w-[100%] border-1 border-t-red-500 
                rounded-b-sm rounded-l-sm box-border
                bg-white z-10 max-h-36 overflow-y-auto
                m-0 p-0 list-none 
                suggestions-list
                `}>{
                suggestions
                    .map((suggestion, index) => {
                        const currSuggestion = dataKey ? suggestion[dataKey] : suggestion
                        return (
                            <li key={index}
                                onClick={() => onSuggestionClick(suggestion)}
                                className="p-3 cursor-pointer hover:bg-slate-300 aria-selected:bg-slate-400"
                                id={`suggestion-${index}`}
                                role="option"
                                aria-selected={selectedIndex === index}
                            >
                                {getHighlightedText(currSuggestion)}
                            </li>
                        )
                    })
            }
        </ul>
    )
})

export default SuggestionsList