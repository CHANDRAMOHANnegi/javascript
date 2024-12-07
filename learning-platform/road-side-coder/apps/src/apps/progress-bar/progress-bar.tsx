import { useEffect } from "react"
import { PROGRESS_CONSTANTS } from "./constants"
import "./style.css"
import { ProgressBarProps } from "./types"

export const ProgressBar = ({ textStyle, containerStyle, progressStyle, value = 0, onProgressComplete }: ProgressBarProps) => {

    const progress = value = Math.min(PROGRESS_CONSTANTS.MAX, Math.max(value, PROGRESS_CONSTANTS.MIN))

    useEffect(() => {
        if (progress >= PROGRESS_CONSTANTS.MAX) {
            onProgressComplete?.()
        }
        return () => {
        }
    }, [progress])


    return (
        <div className='progress-container' style={containerStyle} >
            <span style={{
                ...textStyle,
                color: `${progress > 49 ? "white" : "black"}`
            }} className='text'>{progress}%</span>
            <div className='progress' style={{
                ...progressStyle,
                width: `${progress}%`,
                transition: "width 100ms"
            }} role='progressbar'
                aria-valuemin={PROGRESS_CONSTANTS.MIN}
                aria-valuemax={PROGRESS_CONSTANTS.MAX}
            // aria-valuenow={progress.toFixed()}
            ></div>

        </div>
    )
}
