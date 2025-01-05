
export   const Userinfo = () => {
    return (
        <div className='userInfo flex items-center justify-between'>
            <div className="user flex items-center gap-5">
                <img src={"./avatar.png"} alt=""  className="w-[50px] h-[50px] rounded-sm object-cover"/>
                <h2>{"name"}</h2>
            </div>
            <div className="icons flex gap-5">
                <img src="./more.png" alt="" className="w-[20px] h-[20px] cursor-pointer"/>
                <img src="./video.png" alt="" className="w-[20px] h-[20px] cursor-pointer"/>
                <img src="./edit.png" alt="" className="w-[20px] h-[20px] cursor-pointer"/>
            </div>
        </div>
    )
}