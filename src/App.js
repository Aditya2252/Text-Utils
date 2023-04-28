// import logo from './logo.svg';import './App.css';
// let name="harry";
import React, { useState } from 'react'

import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";
import About from "./components/About";
function App() {
  const[mode,setMode]=useState('light');// whether the element is present or not
  const toggleMode =()=>{
    if(mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor='#042743'
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }

  return (
    <>
   <Navbar Home="Home" title= "my app" aboutText="About my app" mode={mode} toggleMode={toggleMode}/>
   <div className="container my-3">
   <TextForms heading=" Enter the text which are analysed "mode={mode} />

   </div>
  <About/> 
    </>
 );
}


export default App;
