import React, {useState, useContext} from 'react'
import { useNavigate } from "react-router";
import darkModeContext from '../context/darkModeContext';

function Signup(props) {
  const context = useContext(darkModeContext)
  const {darkmode}= context
  localStorage.setItem('token',"")
  let history=useNavigate();
      const [credentials, setcredentials] = useState({"name":"","email":"", "password": "","cpassword":""})
      const handleChange=(e)=>{
              setcredentials({...credentials,[e.target.name]: e.target.value})
          }
      const handleSubmit=async(e)=>{
        e.preventDefault()
        const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
              method: 'POST',
              headers: {
                'Content-type': 'application/json',
              },
              body: JSON.stringify({"name":credentials.name,"email": credentials.email,"password": credentials.password})
            });
            const json= await response.json();
            console.log(json)
            if(json.success && (credentials.password===credentials.cpassword)){
              props.showAlert("Registration Successful","success")
              localStorage.setItem('token',json.authToken)
              history("/")
            }
            else{
              props.showAlert("Invalid Credentials","danger")
            }

      }
  return (
    <>
    <h3 style={{color: `${darkmode==="light"?"black":"white"}`}}>Please Signup to use iNoteBook</h3>
    <form onSubmit={handleSubmit}>
    <div className="mb-3 my-4" style={{color: `${darkmode==="light"?"black":"white"}`}}>
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
        style={{color: `${darkmode==="light"?"black":"white"}`,backgroundColor: `${darkmode==="light"?"white":"#484848"}`}}
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={credentials.name}
          onChange={handleChange}
        />
      </div>
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
          required
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
          required
          minLength={5}
        />
        <div id="passwordHelpBlock" className="form-text" style={{color: `${darkmode==="light"?"black":"white"}`}}>
          Your password must be 5 characters long, contain letters and numbers,
          and must not contain spaces, special characters, or emoji.
        </div>
      </div>
      <div className="mb-3" style={{color: `${darkmode==="light"?"black":"white"}`}}>
        <label htmlFor="cpassword" className="form-label">
          Confirm Password
        </label>
        <input
        style={{color: `${darkmode==="light"?"black":"white"}`,backgroundColor: `${darkmode==="light"?"white":"#484848"}`}}
          type="password"
          id="cpassword"
          name="cpassword"
          className="form-control"
          aria-describedby="passwordHelpBlock"
          onChange={handleChange}
          value={credentials.cpassword}
          required
          minLength={5}
        />
      </div>
      <button type="submit"className="btn btn-primary mb-3">Submit</button>
      </form>
    </>
  )
}

export default Signup