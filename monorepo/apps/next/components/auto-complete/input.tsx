import React, { ChangeEvent, FocusEvent, } from 'react'

type InputProps = {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    onFocus?: (e: FocusEvent<HTMLInputElement>) => void
    inputClass?: string
    inputContainerClass?: string
    placeHolder?: string
}

export const Input = ({ onChange, onFocus, inputClass = "", inputContainerClass = "", placeHolder = "Search..." }: InputProps) => {
    return (
        <div className={`my-3 ${inputContainerClass}`}>
            <input
                className={` border  border-gray-400 rounded-sm ${inputClass}`}
                type="text" onChange={onChange}
                placeholder={placeHolder}
                onFocus={onFocus}
            />
        </div>
    )
}
