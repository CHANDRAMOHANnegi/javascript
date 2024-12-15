import React from 'react'
import Toast from './Toast'
import { ToastProp } from '@/providers/toast-provider/types'

const ToastContainer = ({ toasts }: { toasts: ToastProp[] }) => {
    return (
        <div>
            {toasts.map(toast => <Toast key={toast.id} toast={toast} />)}
        </div>
    )
}

export default ToastContainer