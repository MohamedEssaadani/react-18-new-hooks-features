import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import UseIdForm from './components/UseIdForm'
import UseTransitionCounter from './components/useTransitionCounter'

function App() {
  const [count, setCount] = useState(0)

  return (
     <div className="App">
       <UseIdForm/>
       <h3>Counter: </h3>
       <UseTransitionCounter/>
     </div>
  ) 
}

export default App
