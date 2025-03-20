import { CSSProperties } from "react"

export type ProgressBarProps = {
    textStyle?: CSSProperties
    containerStyle?: CSSProperties
    progressStyle?: CSSProperties
    initialProgress?: number,
    timeToReachFull?: number
    value: number

    showText?:boolean

    onProgressStart?:()=>void
    onProgressComplete?:()=>void
}
