import React, { useContext, useEffect, useRef, useState} from "react";
import NoteContext from "../context/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

function Notes() {
  const context = useContext(NoteContext);
  const { notes, getNote, editNote} = context;
  useEffect(() => {
    return () => {
      getNote();
    };
    // eslint-disable-next-line
  }, []);

  const ref = useRef(null)
  const refClose = useRef(1)

  const updateNote=(currNote)=>{
    ref.current.click()
    setNote({id: currNote._id,etitle: currNote.title,edescription: currNote.description,etag: currNote.tag})
  }
    const {addNote}= context
    const [note, setNote] = useState({id: "", etitle: "",edescription:"",etag:""})

    const handleClick=()=>{
      editNote(note.id,note.etitle,note.edescription,note.etag)
      refClose.current.click()
      }
    const handleChange=(e)=>{
          setNote({...note,[e.target.name]: e.target.value})
      }

  return (
    <>
      <AddNote />
          <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Edit Note
          </button>
          <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                      <div className="container">
                        <form>
                          <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" className="form-control" id="etitle" name='etitle' value={note.etitle} onChange={handleChange} minLength={5} required/>
                          </div>
                          <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={handleChange} minLength={5} required/>
                          </div>
                          <div className="mb-3">
                            <label htmlFor="tag" className="form-label">Tag</label>
                            <input type="text" className="form-control" id="etag" name="etag"  onChange={handleChange} value={note.etag} />
                          </div>
                        </form>
                  </div>
                </div>
                <div className="modal-footer">
                  <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button disabled={(note.etitle.length<=5 || note.edescription.length<=5)?true:false} onClick={handleClick} type="button" className="btn btn-primary">Save changes</button>
                  </div>
                </div>
              </div>
            </div>
        <div>
        <div className="row my-4">
          <h2>Your Notes</h2>
          <div className="container" style={{fontStyle: "italic"}}>
            {(notes.length===0)?"No Notes To Display Here":""}
          </div>
          {notes.map((note, index) => {
            return <NoteItem key={index} note={note} updateNote={updateNote} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Notes;
