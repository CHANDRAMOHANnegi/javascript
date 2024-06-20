"use client"
import React, { useEffect } from "react";
import { useAsync } from "./useAsync";

const fetchData = async () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("Hello value")
        }, 3000)
    })
}

export const UAsync = () => {
    // const { error, fetchAsync, state, value } = useAsync(fetchData, false)
    const { error, fetchAsync, state, value } = useAsync(fetchData, true)

    console.log('------=>>>', value);

    useEffect(()=>{
        // fetchAsync()
    },[])

    return <>
        value : {`${value}`}
        <br />
        state : {`${state}`}
        <br />
        error : {`${error}`}
    </>
};

export default UAsync;
