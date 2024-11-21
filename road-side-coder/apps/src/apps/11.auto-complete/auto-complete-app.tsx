import { useState } from "react"
import AutoComplete, { ItemProp } from "./components/auto-complete"

export const AutoCompleteApp = () => {
    const [data, setData] = useState<ItemProp[]>([])

    const fetchSuggestion = async (query: string) => {
        const response = await fetch(`https://dummyjson.com/recipes/search?q=${query}`)
        if (!response.ok) {
            throw new Error("Network response was not ok")
        }
        const result = await response.json()
        return result.recipes
    }

    return (
        <div>
            <AutoComplete
                data={data}
                placeHolder="Enter Recipe"
                fetchSuggestion={fetchSuggestion}
                dataKey="name"
                customLoading={<>Loading Recipes....</>}
                onSelect={(res: ItemProp) => console.log(res)}
                inputStyle={{}}
                onChange={(a: string) => { return a }}
            />
        </div>
    )
}
