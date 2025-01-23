import React from 'react'
import { ChatType } from './types'
import { CHAT_WINDOW_HEADING } from './constants'

const ChatItem = ({ chat }: { chat: ChatType }) => {

    return <div className='pl-3 border border-gray-300 flex items-start'>
        <svg width={50} height={50}>
            <circle cx={25} cy={25} r={15} fill='transparent' stroke='red' />
            <text fill='red' fontSize={15} x={25} y={25} textAnchor='middle' alignmentBaseline='middle'>{chat.userName[0].toUpperCase()}</text>
        </svg>
        <div className=" pl-3">
            <div className="">{chat.userName}</div>
            <div className="">{chat.message}</div>
        </div>
    </div>
}

const ChatWindow = ({ chats }: { chats: ChatType[] }) => {
    return (
        <div className='border border-gray-300 h-[500px] overflow-scroll'>
            <span> {CHAT_WINDOW_HEADING}</span>
            {chats.map((chat) => {
                return (
                    <div key={chat.id}>
                        <ChatItem chat={chat} />
                    </div>
                )
            })}
        </div>
    )
}

export default ChatWindow