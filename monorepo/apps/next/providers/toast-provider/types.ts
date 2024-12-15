
export type ToastProp = {
    type: string
    message: string
    id: number
}

export type ToastType = "success" | "warning" | "info" | "error"

export enum ToastActionType {
    ADD_TOAST = "ADD_TOAST",
    DELETE_TOAST = "DELETE_TOAST"
}

export type ToastState = {
    toasts: ToastProp[]
}

export type ToastAction = {
    type: ToastActionType
    payload: ToastProp
}

