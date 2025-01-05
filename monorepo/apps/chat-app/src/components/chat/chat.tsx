
export const Chat = () => {
  return (
    <div className="chat flex-2 border-l border-r flex flex-col">
      <div className="top p-5 flex items-center justify-center border-b ">
        <div className="user flex items-center gap-5">
          <img src={"./avatar.png"} alt="" className="w-[60px] h-[60px] rounded-full object-cover" />
          <div className="texts flex flex-col gap-1">
            <span className="text-lg font-bold">{"user"}</span>
            <p className="text-m font-light text-[#a5a5a5]">Lorem ipsum dolor, sit amet.</p>
          </div>
        </div>
        <div className="icons flex gap-5">
          <img src="./phone.png" alt="" className="w-5 h-5" />
          <img src="./video.png" alt="" className="w-5 h-5" />
          <img src="./info.png" alt="" className="w-5 h-5" />
        </div>
      </div>
      <div className="center p-5 flex-1 overflow-scroll flex flex-col gap-5">
        <div>
          <div className="texts">
            {<img src={"message.img"} alt="" />}
            <p>{"message.text"}</p>
            <span>{"hello"}</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img src={"img.url"} alt="" />
          </div>
        </div>
        <div></div>
      </div>
      <div className="bottom p-5 flex items-center justify-between border-t gap-5 m-auto">
        <div className="icons flex gap-5">
          <label htmlFor="file">
            <img src="./img.png" alt="" className="w-5 h-5 cursor-pointer" />
          </label>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
          />
          <img src="./camera.png" alt="" className="w-5 h-5 cursor-pointer"/>
          <img src="./mic.png" alt="" className="w-5 h-5 cursor-pointer"/>
        </div>
        <input type="text" className="flex-1 border-none outline-none text-white p-5 rounded-sm text-base" />
        <div className="emoji relative">
          <img
            src="./emoji.png"
            alt=""
          />
          <div className="absolute bottom-12 left-0">
          </div>
        </div>
        <button
          className="bg-[#5183fe] text-white p-3 border-none rounded-sm cursor-pointer disabled:cursor-not-allowed disabled:bg-[#5182feb4]"
        >
          Send
        </button>
      </div>
    </div>
  )
}
