import React, {useContext} from 'react'
import { Link, useLocation} from 'react-router-dom'
import darkModeContext from '../context/darkModeContext';

function Navbar() {
  const context = useContext(darkModeContext)
  const {darkmode,toggleMode}= context
  let location = useLocation();
  const handleLogout=()=>{
    localStorage.setItem('token',"")
  }
  return (
    <>
    <nav className={`navbar navbar-expand-lg sticky-top bg-${darkmode==="light"?"light":"dark"}`}>
        <div className="container-fluid">
            <Link className={`navbar-brand text-${darkmode==="light"?"dark":"light"}`} to="/">iNoteBook</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className={`nav-link ${location.pathname==='/'?"active":""} text-${darkmode==="light"?"dark":"light"}`} aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className={`nav-link ${location.pathname==='/about'?"active":""} text-${darkmode==="light"?"dark":"light"}`} to="/about">About</Link>
                </li>
            </ul>
            <div className="form-check form-switch mx-4">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toggleMode} />
            <label className={`form-check-label text-${darkmode==="light"?"dark":"light"}`} htmlFor="flexSwitchCheckDefault">{`${darkmode==="light"?'Enable':'Disable'}`} Dark Mode</label>
            </div>
            {!(localStorage.getItem('token')) && <form className="d-flex" role="search">
            <Link className="btn btn-primary" to="/login" role="button">Login</Link>
            <Link className="btn btn-primary mx-2" to="/signup" role="button">Signup</Link>
            </form>}
            {localStorage.getItem('token') && <form className="d-flex" role="search">
            <Link className="btn btn-primary" to="/login" role="button" onClick={handleLogout}>Logout</Link>
            </form>}
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar