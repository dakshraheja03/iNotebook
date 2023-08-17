import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import NoteState from './context/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import {useState} from "react";
import DarkState from './context/DarkState';


function App() {    
  const [alertText, setAlertText] = useState("")
  const [alert, setalert] = useState(null) 
  const [alertType, setalertType] = useState("")    
  const showAlert=(text,type)=>{
    setalert(1)
    setAlertText(text)
    setalertType(type)
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }
  return (
    <>
    <DarkState>
    <NoteState>
    <Router>
    <Navbar/>
    <Alert alertText={alertText} alert={alert} alertType={alertType} />
    <div className="container">
            <Routes>
                <Route exact path='/' element={<Home showAlert={showAlert} />}></Route>
                <Route exact path='/about' element={<About/>}></Route> 
                <Route exact path='/login' element={<Login showAlert={showAlert} />}></Route> 
                <Route exact path='/signup' element={<Signup showAlert={showAlert} />}></Route> 
            </Routes>
    </div>
    </Router>
    </NoteState>
    </DarkState>
    </>
  );
}

export default App;
