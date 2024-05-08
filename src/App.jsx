import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Travail from './components/Travail'
import Projet from './components/Projet'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'




function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Sidenav/>
      <Main/>
      <Travail/>
      <Projet/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
   
   
  )
}

export default App
