
export type ListItemType = {
    id: number,
    label: string,
    image?: string
}

export type ListProps = {
    items: ListItemType[],
    listContainerClass?: string
}
