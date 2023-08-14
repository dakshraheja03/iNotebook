import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import NoteState from './context/NoteState';
import Alert from './components/Alert';


function App() {         
  return (
    <>
    <NoteState>
    <Router>
    <Navbar/>
    <div  style={{height: "50px"}}>
    <Alert message="Alert Component Created" />
    </div>
    <div className="container">
            <Routes>
                <Route exact path='/' element={<Home/>}></Route>
                <Route exact path='/about' element={<About/>}></Route> 
            </Routes>
    </div>
    </Router>
    </NoteState>
    </>
  );
}

export default App;
