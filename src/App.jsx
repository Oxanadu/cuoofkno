import { useState } from 'react'
import Snowfall from 'react-snowfall'
import './App.css'
import s from './img/snow.module.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={s.wrapper}>
      <Snowfall
        // Changes the snowflake color
        color="#fff"
        // Applied to the canvas element
        style={{  opacity:'0.5' }}
        // Controls the number of snowflakes that are created (default 150)
        snowflakeCount={200}
      />
    </div>
  )
}

export default App
