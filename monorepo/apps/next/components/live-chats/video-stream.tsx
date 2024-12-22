import React from 'react'

const VideoStream = () => {
    return (
        <div className='flex-1 flex justify-center'>
            <iframe width="860" height="515"
                src="https://www.youtube.com/embed/x4rFhThSX04?si=4ukrEUkfmsuSgktU"
                title="YouTube video player"
                // frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            // referrerpolicy="strict-origin-when-cross-origin"
            // /allowfullscreen
            >
            </iframe>
        </div>
    )
}

export default VideoStream