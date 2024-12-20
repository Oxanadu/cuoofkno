
import Snowfall from 'react-snowfall'
import './App.css'
import s from './img/snow.module.css'
import music from './img/47835607.mp3'
import bell from './img/bell.png'
import { useEffect, useRef, useState } from 'react'

function App() {

  const audioRef = useRef(null)

  const handlePlay = () => {
    audioRef.current.play();
  };
  return (
    <div className={s.wrapper}>
      <audio
        ref={audioRef}

        controls={false} >
        <source type="audio/mp3" src={music} />
      </audio>
      <div >
        <img onClick={() => handlePlay()
        } className={s.bell} src={bell} alt="" />
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
