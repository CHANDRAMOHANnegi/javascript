import React, { useEffect, useState } from 'react'
import VideoStream from './video-stream'
import ChatWindow from './chat-window'
import { chatData, generateRandomData } from './chatData'
import { CHAT } from './constants'
import { InputWithButton } from '../input-with-button/Input-with-button'
import { ChatType } from './types'

const LiveChat = () => {
    const [chats, setChats] = useState(chatData)

    const updateChats = (newChats: ChatType[]) => {
        setChats(chats => {
            const chatsToShow = [...chats, ...newChats]
            if (chatsToShow.length > CHAT.CHAT_LIMIT) {
                return chatsToShow.slice(chatsToShow.length - CHAT.CHAT_LIMIT, chatsToShow.length)
            }
            return chatsToShow
        })
    }

    const fetchData = () => {
        const newChats = Array.from({ length: 5 }, () => generateRandomData())
        updateChats(newChats)
    }

    const handleSendChat = (chat: string) => {
        updateChats([generateRandomData(chat)])
    }

    useEffect(() => {
        const timer = setInterval(() => {
            fetchData()
        }, CHAT.FETCH_DELAY);
        return () => {
            clearInterval(timer)
        }
    }, [])

    return (
        <div className='flex flex-wrap gap-3'>
            <VideoStream />
            <div className='flex-1 min-w-[400px] '>
                <ChatWindow chats={chats} />
                <InputWithButton onSend={handleSendChat} />
            </div>
        </div>
    )
}

export default LiveChat