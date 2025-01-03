
import Snowfall from 'react-snowfall'
import './App.css'
import s from './img/snow.module.css'
import music from './img/47835607.mp3'
import { useEffect, useRef, useState } from 'react'
import Bell from './components/Bell'
import Video from './components/Video'
import win from "./img/win.png"

function App() {

  const audioRef = useRef(null)
  const [play, setPlay] = useState(true)

  const handlePlay = () => {
    if (play) {
      audioRef.current.play();
      audioRef.current.volume = 0.06
    }
    else {

      audioRef.current.pause();
    }

    setPlay(prev => !prev)
  };
  return (
    <div className={s.wrapper}>
      <audio
        ref={audioRef}
        volume={false}
        controls={false} >
        <source  type="audio/mp3" src={music} />
      </audio>
      
      <Bell handlePlay={handlePlay} play={play} />
      <div className={s.blockVideo}>
        {!play && <Video className={s.video}/>}

      <div className={s.wind}>
      <img className={s.win} src={win} alt="" />
      </div>
      </div>
      

      <Snowfall
        // Changes the snowflake color
        color="#fff"
        // Applied to the canvas element
        style={{ opacity: '0.5' }}
        // Controls the number of snowflakes that are created (default 150)
        snowflakeCount={200}
      />
     
    </div>
  )
}

export default App
