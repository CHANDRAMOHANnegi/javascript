import { useState } from "react"

export const ChatList = () => {
  const [addModel, setAddModel] = useState(false)

  return (
    <div className="chat-list flex-1 overflow-scroll">
      <div className="search flex items-center gap-5 p-5">
        <div className="search-bar flex-1 bg-slate-500 flex items-center gap-5 rounded-sm p-2">
          <img src="./search.png" alt="" className="w-5 h-5" />
          <input type="text" placeholder="Search..." className="bg-transparent border-none outline-none text-white flex-1" />
        </div>
        <img src={addModel ? "./minus.png" : "./plus.png"} alt=""
          onClick={() => setAddModel(prev => !prev)}
        />
      </div>
      <div className="item flex items-center gap-5 p-5 cursor-pointer border-b">
        <img src="./avatar.png" alt="" className="w-12 h-12 rounded-full object-cover" />
        <div className="flex flex-col gap-2">
          <span className="font-medium">Jane Doe</span>
          <p className="text-sm font-light">hello</p>
        </div>
      </div>
    </div>
  )
}
