"use client"

// import CommentBox from "@/components/comments/comment-box"
// import { comments } from "@/components/comments/data"
import LiveChat from "@/components/live-chats/live-chat";

export default function Page() {
    console.log('===');

    return (
        <div>
            {/* <CommentBox comments={comments}/> */}
            <LiveChat />
        </div>
    )
}
