import { useState } from 'react'
import { ForthFeature } from './components/forthFeature'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ForthFeature />
    </>
  )
}

export default App
