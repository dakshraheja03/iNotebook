import React from 'react'

function NoteItem(props) {
    const {note}=props
  return (
    <div className='col-md-3 my-3'>
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">{note.title}</h5>
            <p className="card-text">{note.description}</p>
            <i className="fa-solid fa-pen-to-square" style={{marginRight: "10px"}}></i>
            <i className="fa-solid fa-trash"></i>
        </div>
    </div>
    </div>
  )
}

export default NoteItem