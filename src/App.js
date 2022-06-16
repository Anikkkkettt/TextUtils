
import './App.css';
import Navbar from './components/Navbar';
/*import AboutUs from './components/AboutUs';*/
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';


/*<AboutUs/>*/

function App() {

  const [mode,setMode] = useState('light');
  const toggleMode = () => {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
    }
  }

  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }



  return (
    <>
    <Navbar title="TextUtils"  mde = {mode} toggleMode = {toggleMode}/>
    <Alert  alert = {alert}/>
    <div className="container">
    <TextForm heading = "Enter text to analyze" mde = {mode} showAlert = {showAlert}/>
    </div>
    </>
  );
}

export default App;
