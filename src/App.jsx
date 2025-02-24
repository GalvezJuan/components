import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Titulo } from './Components/Titulo'
import { Resultado } from './Components/Resultado'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Titulo titulo={'Titulo'}/>
      <Resultado valor1={5} valor2={6}/>
    </>
  )
}

export default App
