<<<<<<< HEAD
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import api from './api/Post'
import Home from './Home'
import Search from './Search'
import { format } from 'date-fns' 
import AddPost from './AddPost'
import { DataProvider } from './context/DataContext'

function App() {
  return (
    <>
      <DataProvider>
        <Search />
        <hr />
        <AddPost />
        <Home />
      </DataProvider>
    </>
  )
}

export default App
=======
import { useState } from "react";
import "./App.css";
import Section from "./Section";

function App() {
  let [num, setNum] = useState(0);
  let frnds = ["Smith", "Victor", "Nelson", "Rohit"];

  function inc() {
    setNum(num + 1);
  }

  function dec() {
    setNum(num - 1);
  }

  return (
    <>
      <div>
        <h1>Counter app</h1>
        <p>{num}</p>
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>

        {}
        <Section friends={frnds} />
      </div>
    </>
  );
}

export default App;
>>>>>>> bd475910482486e5fff30fec1f1d45d2ccb59767
