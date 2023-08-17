import React,{ useContext} from 'react'
import NoteContext from '../context/noteContext'
import darkModeContext from '../context/darkModeContext';

function NoteItem(props) {
    const {note, updateNote}=props
    const context = useContext(NoteContext)
    const {deleteNote}= context
    const context1 = useContext(darkModeContext)
  const {darkmode}= context1
  return (
    <div className='col-md-3 my-3'>
    <div className="card" style={{backgroundColor: `${darkmode==="light"?"white":"#484848"}`}}>
        <div className="card-body">
            <h5 className="card-title" style={{color: `${darkmode==="light"?"black":"white"}`}}>{note.title}</h5>
            <p className="card-text" style={{color: `${darkmode==="light"?"black":"white"}`}}>{note.description}</p>
            <i className="fa-solid fa-pen-to-square" style={{marginRight: "10px",color: `${darkmode==="light"?"black":"white"}`}} onClick={()=>{updateNote(note)}}></i>
            <i className="fa-solid fa-trash" style={{color: `${darkmode==="light"?"black":"white"}`}} onClick={()=>{deleteNote(note._id);props.showAlert("Deleted Note SuccessFully","success")}}></i>
        </div>
    </div>
    </div>
  )
}

export default NoteItem