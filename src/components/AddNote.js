import React,{ useContext, useState} from 'react'
import NoteContext from '../context/noteContext'
import darkModeContext from '../context/darkModeContext';

function AddNote(props) {
  const context1 = useContext(darkModeContext)
  const {darkmode}= context1
    const context = useContext(NoteContext)
    const {addNote}= context
    const [note, setNote] = useState({title: "",description:"",tag:""})
    const handleClick=(e)=>{
        e.preventDefault()
        addNote(note.title,note.description,note.tag)
        setNote({title: "",description:"",tag:""})
        props.showAlert("Added Note Successfully","success")
    }
    const handleChange=(e)=>{
        setNote({...note,[e.target.name]: e.target.value})
    }
  return (
    <>
    <div className="container my-4">
      <form>
        <div className="mb-3 my-4">
          <label htmlFor="title" className="form-label" style={{color: `${darkmode==="light"?"black":"white"}`}}>Title</label>
          <input type="text" className="form-control" id="title" name='title' value={note.title} onChange={handleChange} style={{backgroundColor: `${darkmode==="light"?"white":"#484848"}`,color: `${darkmode==="light"?"black":"white"}`}}/>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label" style={{color: `${darkmode==="light"?"black":"white"}`}}>Description</label>
          <input type="text" className="form-control" id="description" name="description"  value={note.description} onChange={handleChange} style={{backgroundColor: `${darkmode==="light"?"white":"#484848"}`,color: `${darkmode==="light"?"black":"white"}`}}/>
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label" style={{color: `${darkmode==="light"?"black":"white"}`}}>Tag</label>
          <input type="text" className="form-control" id="tag" name="tag"  value={note.tag} onChange={handleChange} style={{backgroundColor: `${darkmode==="light"?"white":"#484848"}`,color: `${darkmode==="light"?"black":"white"}`}}/>
        </div>
        <button disabled={(note.title.length<=5 || note.description.length<=5)? true: false} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
      </form>
    </div>
    </>
  )
}

export default AddNote