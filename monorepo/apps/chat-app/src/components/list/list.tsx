import {Userinfo} from './user-info/user-info'
import { ChatList } from './chal-list/chat-list'

export const List = () => {
  return (
    <div className=' overflow-scroll'>
        <Userinfo/>
        <ChatList/>
    </div>
  )
}
