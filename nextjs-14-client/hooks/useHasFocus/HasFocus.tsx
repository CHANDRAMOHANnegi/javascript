"use client"
import { useHasFocus } from "."

export const HasFocus = () => {

    const hasFocus = useHasFocus()

    console.log('======',hasFocus);
    

    return <>
    
    {`hasFocus : ${hasFocus}`}
    
    </>
}
 
