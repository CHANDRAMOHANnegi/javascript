import React, { KeyboardEvent, useRef } from 'react'

type InputButtonProps = {
    onSend: (s: string) => void
    buttonLabel?: string
    inputPlaceHolder?: string
    disabled?: boolean
}

export const InputWithButton = ({ onSend, disabled, buttonLabel = "send", inputPlaceHolder = "Enter message" }: InputButtonProps) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const handleSend = () => {
        if (inputRef.current?.value) {
            const text = inputRef.current?.value ?? ""
            onSend(text)
            inputRef.current.value = ""
        }
    }

    const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key.toLowerCase() === "enter") {
            handleSend()
        }
    }

    return (
        <div className='flex'>
            <input disabled={disabled} type="text" ref={inputRef} onKeyDown={handleKeyPress} placeholder={inputPlaceHolder} />
            <button disabled={disabled} onClick={handleSend}>{buttonLabel}</button>
        </div>
    )
}
