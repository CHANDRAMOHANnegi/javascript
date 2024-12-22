import { ChatType } from "./types";

export const chatData: ChatType[] = [
    {
        id: 1,
        message: "hey how are you",
        userName: "user 1",
        image: ""
    }
]

export const generateRandomData = (chat?: string) => {
    const random = Math.floor(Math.random() * 1000)
    return ({
        id: Date.now(),
        message: chat ?? "hey how are you",
        userName: `user-${random}`,
        image: ""
    })
}