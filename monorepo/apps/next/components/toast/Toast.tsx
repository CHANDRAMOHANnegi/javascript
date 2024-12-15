
import { ToastProp, ToastType } from '@/providers/toast-provider/types'
import React, { CSSProperties } from 'react'

type ThemeProp = Record<ToastType, CSSProperties>

const Theme: ThemeProp = {
    success: { backgroundColor: "green" },
    warning: { backgroundColor: "yellow" },
    error: { backgroundColor: "red" },
    info: { backgroundColor: "green" },
}

const Toast = ({ toast }: { toast: ToastProp }) => {
    const styleTheme = Theme[toast.type as ToastType]
    return (
        <div style={styleTheme} className='my-2'>
            <span>
                {toast.type}
            </span>
            <span className='ml-4'>
                {toast.message}
            </span>
        </div>
    )
}

export default Toast