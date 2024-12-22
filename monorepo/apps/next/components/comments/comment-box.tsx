import React from 'react'

type UserType = string

export type CommentType = {
    id?: string
    comment: string
    username: UserType
    replies: CommentType[]
}

const Comment = ({ username, comment, replies }: CommentType) => {
    return (
        <div>
            <div className='flex items-center'>
                <svg width={50} height={50}>
                    <circle cx={25} cy={25} r={15} fill='transparent' stroke='red' />
                    <text fill='red' fontSize={15} x={25} y={25} textAnchor='middle' alignmentBaseline='middle'>{username[0].toUpperCase()}</text>
                </svg>
                <span>
                    {username}
                </span>
            </div>
            <div>{comment}</div>
            <div className='pl-4 border-l-2 border-gray-500'>
                {replies.map((reply, index) => <Comment {...reply} key={index} />)}
            </div>
        </div>
    )
}

const CommentBox = ({ comments }: { comments: CommentType[] }) => {
    console.log('===', comments);

    return (
        <>
            {comments.map((comment, index) =>
                <Comment {...comment} key={index} />
            )}
        </>
    )
}

export default CommentBox