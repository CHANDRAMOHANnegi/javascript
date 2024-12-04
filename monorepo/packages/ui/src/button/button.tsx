import { ComponentProps } from "react"

/***
 * 
 *  ComponentProps<'button'>
 * 
 * **/ 

export const Button = (props: ComponentProps<'button'>) => {
    return (
        <button {...props}>Hello</button>
    )
}
