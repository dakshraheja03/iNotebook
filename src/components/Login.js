import React, {useState, useContext} from "react";
import { useNavigate } from "react-router";
import darkModeContext from '../context/darkModeContext';

function Login(props) {
  const context = useContext(darkModeContext)
  const {darkmode}= context
  localStorage.setItem('token',"")
  let history=useNavigate();
  const [credentials, setcredentials] = useState({"email":"", "password": ""})
  const handleChange=(e)=>{
          setcredentials({...credentials,[e.target.name]: e.target.value})
      }
  const handleSubmit=async(e)=>{
    e.preventDefault()
    const response = await fetch(`http://localhost:5000/api/auth/login`, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({"email": credentials.email,"password": credentials.password})
        });
        const json= await response.json();
        console.log(json)
        if(json.success){
          //redirect
          props.showAlert("Logged In Successfully","success")
          localStorage.setItem('token',json.authToken)
          history("/");
        }
        else{
          props.showAlert("Login Falied","danger")
        }
  }
  return (
    <>
    <h3 style={{color: `${darkmode==="light"?"black":"white"}`}}>Please Login Your Account</h3>
    <form onSubmit={handleSubmit}>
      <div className="mb-3 my-4" style={{color: `${darkmode==="light"?"black":"white"}`}}>
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
        style={{color: `${darkmode==="light"?"black":"white"}`,backgroundColor: `${darkmode==="light"?"white":"#484848"}`}}
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={credentials.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3" style={{color: `${darkmode==="light"?"black":"white"}`}}>
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
        style={{color: `${darkmode==="light"?"black":"white"}`,backgroundColor: `${darkmode==="light"?"white":"#484848"}`}}
          type="password"
          id="password"
          name="password"
          className="form-control"
          aria-describedby="passwordHelpBlock"
          onChange={handleChange}
          value={credentials.password}
        />
        <div id="passwordHelpBlock" className="form-text" style={{color: `${darkmode==="light"?"black":"white"}`}}>
          Your password must be 5 characters long, contain letters and numbers,
          and must not contain spaces, special characters, or emoji.
        </div>
      </div>
      <button type="submit"className="btn btn-primary mb-3">Submit</button>
      </form>
    </>
  );
}

export default Login;
