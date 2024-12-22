"use client"

import { AutoComplete } from "@/components/auto-complete/auto-complete";
import CommentBox from "@/components/comments/comment-box"
import { comments } from "@/components/comments/data"
import LiveChat from "@/components/live-chats/live-chat";

export default function Page() {
    return (
        <div>
            {/* <CommentBox comments={comments}/>
            <LiveChat /> */}
            <AutoComplete/>
        </div>
    )
}
