import React from 'react'
import ReactPlayer from 'react-player'
import video from '../img/video.mp4'

function Video() {
  return (
    <ReactPlayer 
    playing={true}
    url={video}/>
  )
}

export default Video