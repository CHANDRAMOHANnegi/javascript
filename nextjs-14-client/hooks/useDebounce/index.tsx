"use client"
import React, { useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";

function mouseMove() {
    console.log('move mouse');
}

export const Debounce = () => {
    const debouncedMouseMove = useDebounce(mouseMove, 1000)

    useEffect(() => {
        document.addEventListener("mousemove", debouncedMouseMove)
        return () => {
        }
    }, [])

    return <>

    </>
};

export default Debounce;
