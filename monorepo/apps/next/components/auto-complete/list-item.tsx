import { ListItemType } from "./types"

type ListItemProp = {
    item: ListItemType,
    listContainerClass?: string
}

export const ListItem = ({ item, listContainerClass = "" }: ListItemProp) => {
    return <div className={` border border-green-300${listContainerClass}`}>
        <span className="pl-2">{item.label}</span>
    </div>
}
