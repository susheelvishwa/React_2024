import { useState } from 'react'
import StopWatch from './components/StopWatch'

const App = () => {

  const[show, setShow] = useState(true)

  function handleShow() {
    setShow(!show)
  }

  return (
    <div>
      {/* {show && <StopWatch />} */}
      {show ? <StopWatch /> : null}
      <button onClick={handleShow}>TOGGLE BTN</button>
    </div>
  )
}

export default App
