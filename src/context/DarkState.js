import React, { useState } from 'react'
import darkModeContext from './darkModeContext'

function DarkState(props) {
    const [darkmode, setdarkmode] = useState('light')
    const toggleMode=()=>{
        if(darkmode==="light"){
          setdarkmode("dark")
          document.body.style.backgroundColor="#1a1b1f"
        }
        else{
          setdarkmode("light")
          document.body.style.backgroundColor="white"
        }
      }
  return (
    <darkModeContext.Provider value={{darkmode,toggleMode}}>
            {props.children}
        </darkModeContext.Provider>
  )
}

export default DarkState;