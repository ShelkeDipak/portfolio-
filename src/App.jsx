import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './Componants/Nav/Nav'
import Home from './Componants/Home/Home'
import About from './Componants/About/About'
import Project from './Componants/Project/Project'
import Contact from './Componants/Contact/Contact'
  

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>
    <Home/>
    <About/>
    <Project/>
    <Contact/>
  
    </>
      
  )
}

export default App
