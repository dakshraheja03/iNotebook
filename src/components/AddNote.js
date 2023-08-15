import React,{ useContext, useState} from 'react'
import NoteContext from '../context/noteContext'

function AddNote(props) {
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
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" name='title' value={note.title} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input type="text" className="form-control" id="description" name="description"  value={note.description} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">Tag</label>
          <input type="text" className="form-control" id="tag" name="tag"  value={note.tag} onChange={handleChange} />
        </div>
        <button disabled={(note.title.length<=5 || note.description.length<=5)? true: false} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
      </form>
    </div>
    </>
  )
}

export default AddNote