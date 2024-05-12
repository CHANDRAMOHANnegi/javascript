"use client"

import { useContext } from "react"

const FeatureFlagContext = React.createContext({})

export const FeatureFlagProvider = ({ children }) => {

    const [features, setFeatures] = useState({
        mode: "dark",
        chatEnabled: false
    })

    useEffect(() => {

        return () => {
        }
    }, [])

    return <FeatureFlagContext.Provider value={{ features }}>
        {children}
    </FeatureFlagContext.Provider>
}

export const ChatWrapper = () => {
    const { features } = useContext(FeatureFlagContext)

    return features.chatEnabled ? <>
        chat enabled
    </> : null
}

export const Page = () => {

    return <FeatureFlagProvider>
        <ChatWrapper />
    </FeatureFlagProvider>
}


export default Page