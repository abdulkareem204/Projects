import { useState } from 'react'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Footer from "./components/Footer"

function App() {


  return (
    <>
     <div
  className="
    min-h-screen w-full bg-neutral-950
    bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.35),transparent)]
  "
>
      <Navbar/>
      <Manager/>
      <Footer/>
</div>
    </>
  )
}

export default App
