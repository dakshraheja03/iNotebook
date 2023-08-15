import React,{ useContext} from 'react'
import NoteContext from '../context/noteContext'

function NoteItem(props) {
    const {note, updateNote}=props
    const context = useContext(NoteContext)
    const {deleteNote}= context
  return (
    <div className='col-md-3 my-3'>
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">{note.title}</h5>
            <p className="card-text">{note.description}</p>
            <i className="fa-solid fa-pen-to-square" style={{marginRight: "10px"}} onClick={()=>{updateNote(note)}}></i>
            <i className="fa-solid fa-trash" onClick={()=>{deleteNote(note._id);props.showAlert("Deleted Note SuccessFully","success")}}></i>
        </div>
    </div>
    </div>
  )
}

export default NoteItem