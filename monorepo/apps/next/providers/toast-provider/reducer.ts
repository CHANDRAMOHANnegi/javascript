import { ToastAction, ToastActionType, ToastState } from "./types"

export const toastReducer = (state: ToastState, action: ToastAction) => {

    switch (action.type) {
        case ToastActionType.ADD_TOAST:

            return {
                ...state,
                toasts: [...state.toasts, action.payload]
            }

        case ToastActionType.DELETE_TOAST:

            return {
                ...state,
                toasts: state.toasts.filter(toast => toast.id !== action.payload.id)
            }


        default:
            return {
                ...state,
            }
    }

}