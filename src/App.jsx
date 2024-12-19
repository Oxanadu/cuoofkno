import { useState } from 'react'
import Snowfall from 'react-snowfall'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Snowfall
        // Changes the snowflake color
        color="blue"
        // Applied to the canvas element
        style={{ background: '#fff' }}
        // Controls the number of snowflakes that are created (default 150)
        snowflakeCount={200}
      />
    </>
  )
}

export default App
