import React from 'react'
import VideoListItem from './video_list_item'


//videos is a prop passed from index.js file, videos, so when we access it here we use props.videos, which is an array of videos
//so we access multiple values from props file
const VideoList = (props) => {
    
    const videoItems = props.videos2.map((video)=>{
        return (
        <VideoListItem 
            onVideoSelect={props.onVideoSelect}
            key={video.id} 
            video={video} 
            active={video === props.selectedVideo}/>
        )
    })

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    )
}



export default VideoList