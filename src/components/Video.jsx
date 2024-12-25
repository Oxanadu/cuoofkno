import React from 'react'
import ReactPlayer from 'react-player'
import video from '../img/video.mp4'
import s from '../img/snow.module.css'
function Video() {
  return (
    
       <ReactPlayer className={s.video}
    playing={true}
   
    width={450}
  
    url={video}/>
   
  )
}

export default Video