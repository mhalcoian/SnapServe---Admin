import { useState } from 'react'
import Auth from './components/sections/auth'
import Dashboard from './components/sections/dashboard'
import './css/App.css'
import './css/auth.css'
import './css/dashboard.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Dashboard/>
    </div>
  )
}

export default App
