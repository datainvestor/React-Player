import React from 'react'

const VideoDetail = ({video}) =>{
    //since we need to wait for api to run we have to check if it loaded
    if (!video) {
        return <div>Loading...</div>
    }


    const videoId=video.id
    //use of backtics is the same as adding two string together
    const url = `//www.dailymotion.com/embed/video/${videoId}`

    return (
        <div className="video-detail col-md-8" >

            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>

            <div className="details">
                <div>{video.title}</div>
                <div>{video.description}</div>
            </div>

        </div>
    )
}

export default VideoDetail