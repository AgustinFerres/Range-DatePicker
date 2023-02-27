import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Calendar from './Calendar'
import SelectDays from './SelectDays'

function App() {
  const [count, setCount] = useState(0)

  return (
    <SelectDays/>
  )
}

export default App
