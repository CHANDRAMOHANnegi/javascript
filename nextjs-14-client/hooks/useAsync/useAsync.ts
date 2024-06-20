import { error } from "console";
import { useEffect, useRef, useState } from "react";

type DataProp = {
    state: "idle" | "success" | "failure",
    error: string | null
    value: any
}

export function useAsync<T>(asyncFn: () => Promise<T>, immediate: boolean) {

    const [data, setData] = useState<DataProp>({
        state: "idle",
        error: null,
        value: ""
    })

    const fetchAsync = () => {
        setData({ state: "idle", error: null, value: "null" })
        return asyncFn()
            .then(d => {
                setData({
                    state: "success",
                    value: d,
                    error: null,
                })
            })
            .catch(err => {
                setData({
                    state: "failure",
                    value: null,
                    error: err,
                })
            })
    }

    useEffect(() => {
        if (immediate) {
            fetchAsync()
        }
    }, [immediate, asyncFn])

    const { error, state, value } = data

    return {
        error,
        state,
        value,
        fetchAsync
    }
}