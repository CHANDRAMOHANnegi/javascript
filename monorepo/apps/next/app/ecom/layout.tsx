"use client"
import TopNav from '@/components/navigation/top-navigation'
import useOnlineNotification from '@/hooks/useOnlineNotification'
import { useToast } from '@/providers/toast-provider'
import React, { PropsWithChildren } from 'react'

export default function Layout({ children }:PropsWithChildren) {
    // const toast = useToast()
    // useOnlineNotification((event: Event) => {
    //     if (event.type === "online") {
    //     } else {
    //         toast.error("offline")
    //     }
    // })

    return (
        <>
            {/* <TopNav /> */}
            {/* <button
                onClick={() => { toast.success("hello") }}
            >success</button>
            <br />
            <button
                onClick={() => { toast.error("hello") }}
            >error</button>

            <br />
            <button
                onClick={() => { toast.warning("hello") }}
            >warning</button>

            <br />
            <button
                onClick={() => { toast.info("hello") }}
            >info</button> */}
            {children}
        </>
    )
}
