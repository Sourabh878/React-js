import React,{useState} from 'react';
import './App.css';
import TextArea from './components/TextArea';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
// import AboutUs from './components/AboutUs';
export default App;

function App() {
   const [mode, changeMode] = useState('light');
   const [alert,setAlert] =useState(null);
   
   const greenMode =()=>
   {
     if(mode == "light")
     {
         changeMode("green");
         document.body.style.backgroundColor="#0a3622";
     }
     else
     {
         changeMode("light");
         document.body.style.backgroundColor="white";
     }
   }

   const showAlert =(message,type)=>
  {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>
    {
      setAlert(null);
    },2000)
  }
   
   const change=()=>
    {
        if(mode === 'dark')
        {
            changeMode('light');
            document.body.style.backgroundColor ="white";
            showAlert("Changed To light mode","Success");
        }
        else
        {
            changeMode('dark');
            document.body.style.backgroundColor ="#343a40";
            showAlert("Changed To Dark Mode","Success");
        }
    }

  return (
    <>
    <Navbar title="hello" theme={mode} toggle={change} toggoleG={greenMode}/>
    <Alert alert={alert}/>
    <TextArea heading="Text Area" alert={showAlert} toggleG={greenMode} theme={mode}/>
    {/* <AboutUs/> */}
    
    </>
  );
  
}

