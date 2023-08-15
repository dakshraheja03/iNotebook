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


function App() {    
  const [alertText, setAlertText] = useState("")
  const [alert, setalert] = useState(null)     
  const showAlert=(text)=>{
    setalert(1)
    setAlertText(text)
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }
  return (
    <>
    <NoteState>
    <Router>
    <Navbar/>
    <Alert alertText={alertText} alert={alert}/>
    <div className="container">
            <Routes>
                <Route exact path='/' element={<Home/>}></Route>
                <Route exact path='/about' element={<About/>}></Route> 
                <Route exact path='/login' element={<Login/>}></Route> 
                <Route exact path='/signup' element={<Signup/>}></Route> 
            </Routes>
    </div>
    </Router>
    </NoteState>
    </>
  );
}

export default App;
