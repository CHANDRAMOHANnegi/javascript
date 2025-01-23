import { Metadata } from 'next'
import React from 'react'

export type UserType = {
    name: {first:string}
}

export const metadata: Metadata = {
    title: "server page",
    description: "server"
}

export const dynamic = "force-dynamic"

const fetchUsers = async () => {
    const response = await fetch('https://randomuser.me/api/?results=10',{cache:"force-cache"})
    const data = await response.json()
    return data.results
}

export default async function Page() {
    const users = await fetchUsers()

    if (users?.length === 0) {
        return '...loading'
    }

    return (
        <div className="grid  items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main >
                <h1>
                    server :{Date.now()}
                </h1>

                <div className="">
                    <h2>users list</h2>
                    <ul>
                        {users?.map((user: UserType, index: number) => <li key={index}>{user.name?.first}</li>)}
                    </ul>
                </div>
            </main>
        </div>
    )
}
