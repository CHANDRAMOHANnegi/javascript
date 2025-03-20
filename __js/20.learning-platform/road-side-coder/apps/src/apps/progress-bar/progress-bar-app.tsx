import { useEffect, useState } from 'react'
import "./style.css"
import { ProgressBar } from './progress-bar'

export const ProgressBarApp = () => {

    const [progress, setProgress] = useState(0)
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        const timerId = setInterval(() => {
            setProgress(progress => {
                if (progress === 100) {
                    clearInterval(timerId)
                    return progress
                }
                return progress + 1
            })
        }, 100)

        return () => clearInterval(timerId)
    }, [])


    return (
        <div className='mt-20 mx-10 text-center' >
            <ProgressBar value={progress} onProgressComplete={() => { setSuccess(true) }} />
            <span>{success ? "Complete" : "loading..."}</span>
        </div>
    )
}
