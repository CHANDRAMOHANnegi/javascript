import TopNav from '@/components/navigation/top-navigation'
import topNavigationMenu from '@/config/nav-config'
import React from 'react'

export default function Layout() {
    return (
        <>
            <TopNav navData={topNavigationMenu}/>
        </>
    )
}
