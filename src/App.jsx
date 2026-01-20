import { useState } from 'react'
import { FirstFeature } from './components/firstFeature'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <FirstFeature />
      </div>
    </>
  )
}

export default App
