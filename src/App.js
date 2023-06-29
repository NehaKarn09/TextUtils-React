// import logo from './logo.svg';
import React, {useState} from 'react'

import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {

  const [mode,setMode] = useState('light');
  const [btn,setBtn] = useState('Enable Dark mode');
  const [alert,setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(() => {
      setAlert(null);

    },1500);
  }
  

  const toggleMode =() =>{
    if(mode === 'dark')
    {
      setMode('light');
      setBtn('Enable Dark Mode');
      document.body.style.background = 'white';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('dark');
      document.body.style.background = '#122d5c';
      setBtn('Enable light Mode');
      showAlert("Light mode has been enabled","success");
    }
  }

  
  return (
<>
{/* <Router> */}
<Navbar title="Karn" aboutText="About" mode={mode} toggleMode={toggleMode} btn={btn} />
{/* <Navbar/> */}
<Alert alert={alert}/>
<div className="container my-3">
{/* <Routes>
          <Route exact path="/about" element={<About/>}>
          </Route>
          <Route exact path="/" element={<Textform heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>}>
          </Route>
        </Routes> */}

<Textform heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>
{/* <About/> */}
</div>
{/* </Router> */}
</>
  );
}

export default App;
