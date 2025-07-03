import { useState } from 'react'
import Auth from './components/sections/auth'
import './css/App.css'
import './css/auth.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Auth/>
    </div>
  )
}

export default App
