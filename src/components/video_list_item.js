import React from 'react'

//we can write {videos} instead of props and then no need to declae const video= props.video
//we can pull multiple props from props object in curly braces
const VideoListItem = ({video, onVideoSelect}) => {
    const imageUrl = video.thumbnail_60_url;
  
    return (
      <li onClick={() => onVideoSelect(video)} className="list-group-item">
        <div className="video-list media">
          <div className="media-left">
            <img className="media-obj" src={imageUrl}/>
          </div>
          <div className="media-body">
            <div className="media-heading">{video.title}</div>
          </div>
        </div>
      </li>
    );
  };
  

export default VideoListItem