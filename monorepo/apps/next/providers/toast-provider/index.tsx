"use client"
import ToastContainer from "@/components/toast/ToastContainer"
import React, { createContext, PropsWithChildren, useContext, useReducer } from "react"
import { ToastActionType, ToastProp, ToastType } from "./types"
import { toastReducer } from "./reducer"
import { initialState } from "./constants"

type ToastContextProp = {
    success: (message: string) => void,
    warning: (message: string) => void,
    info: (message: string) => void,
    error: (message: string) => void,
    remove: (toast: ToastProp) => void,
}

const ToastContext = createContext<ToastContextProp | null>(null)

export const ToastProvider = ({ children }: PropsWithChildren) => {
    const [state, dispatch] = useReducer(toastReducer, initialState)

    const addToast = (type: ToastType, message: string) => {
        const id = Date.now()
        const toast = { id, message, type }
        dispatch({
            type: ToastActionType.ADD_TOAST,
            payload: toast
        })

        // setTimeout(() => {
        //     remove(toast)
        // }, 2000);
    }

    const remove = (toast: ToastProp) => {
        dispatch({
            type: ToastActionType.DELETE_TOAST,
            payload: toast
        })
    }

    const success = (message: string) => {
        addToast("success", message)
    }

    const warning = (message: string) => {
        addToast("warning", message)
    }

    const info = (message: string) => {
        addToast("info", message)
    }

    const error = (message: string) => {
        addToast("error", message)
    }

    return <ToastContext.Provider value={{
        success, warning, info, error, remove
    }}>
        {children}
        <ToastContainer toasts={state.toasts} />
    </ToastContext.Provider>
}

export const useToast = () => {
    const toastContext = useContext(ToastContext)
    if (!toastContext) {
        throw new Error("useToast has to be used within <ToastContext.Provider>")
    }

    return toastContext
}