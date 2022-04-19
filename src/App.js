import { useState } from 'react'
import './App.css'
import Box from './component/Box'

function App() {
  let counter = 0

  const [counter2, setCounter2] = useState(0)

  const increase = () => {
    counter = counter + 1
    setCounter2(counter2 + 1)
  }

  // 1. User clicked button
  // 2. counter+1 => 1
  // 3. called setState function
  // 4. console.log executed
  // counter = 1, counter2=> still not changed
  // end increase()
  // App re-render
  // let counter=0, (reload)
  // can see updated state

  return (
    <div>
      <div>{counter}</div>
      <div>state: {counter2}</div>
      <button onClick={increase}>Click!</button>
    </div>
  )
}

export default App
