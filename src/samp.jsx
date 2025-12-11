import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Section from './Section'

function App() {
  let frnds=["Smith","Victor","Nelson","Rohit"]
  return (
    <>
    <Section/>
    {frnds.map((val,ind)=>(<li>{ind}-{val}</li>))}
    </>
  )
}
export default App