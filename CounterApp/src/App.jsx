import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [num,setNum]=userState(0)
  functionint()
  {
    setNum(num+1)
  }
  function dec()
  {
    setNum(num-1)
  }
  return (
    <>
    <div>
      <h1>Counter app</h1>
         <p>{num}</p>
         <button onClick={inc}>+</button>
          <button onClick={dec}>-</button>
    

    </div>



    </>
  )
}

export default App
