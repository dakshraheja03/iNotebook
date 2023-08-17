import React, {useContext}  from 'react'
import Notes from './Notes'
import darkModeContext from '../context/darkModeContext';

function Home(props) {
  const context = useContext(darkModeContext)
  const {darkmode}= context
  return (
    <div>
    <h2 className='my-4' style={{color: `${darkmode==="light"?"black":"white"}`}}>Add a Note</h2>
    <div className="container">
        <Notes showAlert={props.showAlert} />
    </div>
    </div>
  )
}

export default Home