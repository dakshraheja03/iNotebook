import React from 'react'
import Notes from './Notes'

function Home(props) {
  return (
    <div>
    <h2 className='my-4'>Add a Note</h2>
    <div className="container">
        <Notes showAlert={props.showAlert} />
    </div>
    </div>
  )
}

export default Home