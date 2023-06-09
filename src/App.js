// import logo from './logo.svg';import './App.css';
// let name="harry";
import React, { useState } from 'react'

import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";
import About from "./components/About";
import Alert from "./components/Alert"

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const  [alert, setAlert] = useState({
    msg:"",
    type:"",
  });

  let showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }



  // whether the element is present or not
  const toggleMode =()=>{
    if(mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor='#042743'
    showAlert("Dark mode has been enabled","success");
    document.title = 'my-app - Dark Mode';

    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'my-app- Light Mode';
    }
  }

  return (
    <>
   <Navbar Home="Home" title= "my app" aboutText="About my app" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className="container my-3">
   <TextForms  showAlert={showAlert} heading=" Enter the text which are analysed "mode={mode} />

   </div>
  <About/> 
    </>
 );
}


export default App;
