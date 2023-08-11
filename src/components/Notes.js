import React,{ useContext }  from 'react'
import NoteContext from '../context/noteContext'
import NoteItem from './NoteItem'
import AddNote from './AddNote'

function Notes() {
    const context = useContext(NoteContext)
    const {notes}= context
  return (
    <>
    <AddNote/>
    <div>
    <div className="row my-4">
      <h2>Your Notes</h2>
      {notes.map((note,index)=>{
        return <NoteItem key={index} note={note} />
      })}
    </div>
    </div>
    </>
  )
}

export default Notes