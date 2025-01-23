"use client"

import React, { useEffect, useState } from 'react'
export type UserType = {
    name: { first: string }
}

export default function Page() {
    const [users, setusers] = useState([])

    useEffect(() => {

        fetch('https://randomuser.me/api/?results=10')
            .then((res) => res.json())
            .then((data) => setusers(data.results))

        return () => {
        }
    }, [])
    console.log(users);


    if (users.length === 0) {
        return '...loading'
    }


    return (
        <div className="grid  items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main >
                <h1>
                    client :{Date.now()}
                </h1>

                <div className="">
                    <h2>users list</h2>
                    <ul>
                        {users?.map((user: UserType, index) => <li key={index}>{user?.name?.first}</li>)}
                    </ul>
                </div>
            </main>
        </div>
    )
}

