import { useState } from 'react'
import { ForthFeature } from './components/forthFeature'
import { FirstFeature } from './components/firstFeature'
import { SecondFeature } from './components/secondFeature'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ForthFeature />
      <FirstFeature />
      <SecondFeature />
    </>
  )
}

export default App
