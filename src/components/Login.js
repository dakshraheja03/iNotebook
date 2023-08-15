import React, {useState} from "react";
import { useNavigate } from "react-router";

function Login() {
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
          localStorage.setItem('token',json.authToken)
          history("/");
        }
        else{
          alert("Login Failed")
        }
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className="mb-3 my-4">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          placeholder="Enter Your Email Address"
          value={credentials.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="form-control"
          aria-describedby="passwordHelpBlock"
          placeholder="Enter Your Password"
          onChange={handleChange}
          value={credentials.password}
        />
        <div id="passwordHelpBlock" className="form-text">
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
