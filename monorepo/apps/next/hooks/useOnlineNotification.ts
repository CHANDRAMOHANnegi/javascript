import { useEffect } from "react"

const useOnlineNotification = (callback: (event: Event) => void) => {

    useEffect(() => {
        // check if user is online
        // based on that we either show a success or error notification
        window.addEventListener("online", callback)
        window.addEventListener("offline", callback)

        return () => {
            window.addEventListener("online", callback)
            window.addEventListener("offline", callback)
        }
    }, [callback])

    return null
}

export default useOnlineNotification