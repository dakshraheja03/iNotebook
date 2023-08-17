import React, {useContext} from 'react'
import darkModeContext from '../context/darkModeContext';

function About() {
  const context = useContext(darkModeContext)
  const {darkmode}= context
  return (
    <>
      <h3 className="my-4" style={{color: `${darkmode==="light"?"black":"white"}`}}>This is About</h3>
    </>
  )
}

export default About