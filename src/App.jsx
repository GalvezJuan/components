import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Titulo } from './Components/Titulo'
import { Resultado } from './Components/Resultado'
import { TituloAlternativo } from './Components/TituloAlternativo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <TituloAlternativo titulo2={false}/>
      <Resultado valor1={5} valor2={6}/>
    </>
  )
}

export default App
