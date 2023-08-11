import React,{ useContext }  from 'react'
import NoteContext from '../context/noteContext'
import NoteItem from './NoteItem'

function Notes() {
    const context = useContext(NoteContext)
    const {notes,setnotes}= context
  return (
    <div>
    <div className="row my-4">
      <h2>Your Notes</h2>
      {notes.map((note)=>{
        return <NoteItem note={note} />
      })}
    </div>
    </div>
  )
}

export default Notes