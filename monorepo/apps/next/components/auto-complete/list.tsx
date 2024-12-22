import React from 'react'
import { ListProps } from './types'
import { ListItem } from './list-item'

export const List = ({ items }: ListProps) => {
    return (
        <div className={` border border-red-400  max-w-[200px] `}>
            {items.map((item, index) => <ListItem item={item} key={index} />)}
        </div>
    )
}
