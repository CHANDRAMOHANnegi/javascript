import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "static page",
    description:"static"
}

export default function Page() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main >
                <p>
                    Static :{Date.now()}
                </p>
            </main>
        </div>
    )
}

