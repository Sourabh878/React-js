import React,{useState} from 'react';
import './App.css';
import TextArea from './components/TextArea';
import Navbar from './components/Navbar';
// import AboutUs from './components/AboutUs';
export default App;

function App() {
   const [mode, changeMode] = useState('light');
   

   const change=()=>
    {
        if(mode === 'dark')
        {
            changeMode('light');
            document.body.style.backgroundColor ="white";
        }
        else
        {
            changeMode('dark');
            document.body.style.backgroundColor ="#343a40";
        }
    }

  return (
    <>
    <Navbar title="hello" theme={mode} toggle={change}/>
    <TextArea heading="Text Area" theme={mode}/>
    {/* <AboutUs/> */}
    
    </>
  );
  
}

