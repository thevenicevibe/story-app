import react from 'react'
import Header from './assets/Header'
import Main from './assets/Main' 
import Story from './assets/Story';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import './App.css'

function App() {


  return (
    <>
      
      
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Header/>}></Route>
      <Route path="/" element={<Main/>}></Route>
      
        <Route path="/story" element={<Story />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
