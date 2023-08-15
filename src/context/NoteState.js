import React,{useState} from 'react'
import NoteContext from './noteContext';

const NoteState=(props)=>{
    const notesInitial = []
      const [notes, setnotes] = useState(notesInitial)


      //Get All Notes
      const getNote=async()=>{
        const url="http://localhost:5000/api/notes/fetchallnotes"
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkNWYyODllMDBkMzg3YTY5OWUzMGFhIn0sImlhdCI6MTY5MTc1MDg5M30.jR3EySQv8yI-aZDyt7EZ3WCM5Vpl7-4dzPqBNeqlIAw"
          },
        });
        const json= await response.json();
        setnotes(json)
      }


      //Add a Note
      const addNote=async(title,description,tag)=>{
          const url="http://localhost:5000/api/notes/addnote"
          // eslint-disable-next-line
          const response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkNWYyODllMDBkMzg3YTY5OWUzMGFhIn0sImlhdCI6MTY5MTc1MDg5M30.jR3EySQv8yI-aZDyt7EZ3WCM5Vpl7-4dzPqBNeqlIAw"
            },
              body: JSON.stringify({title,description,tag}),
          });
          getNote();
          // const json= response.json();
      }

      //Delete a Node
      const deleteNote=async(id)=>{
        // eslint-disable-next-line
          const response = await fetch(`http://localhost:5000/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkNWYyODllMDBkMzg3YTY5OWUzMGFhIn0sImlhdCI6MTY5MTc1MDg5M30.jR3EySQv8yI-aZDyt7EZ3WCM5Vpl7-4dzPqBNeqlIAw"
            }
          });
          getNote()
      }

      //Edit a Note
      const editNote=async (id,title,description,tag)=>{
        // eslint-disable-next-line
        const response = await fetch(`http://localhost:5000/api/notes/updatenote/${id}`, {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json',
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkNWYyODllMDBkMzg3YTY5OWUzMGFhIn0sImlhdCI6MTY5MTc1MDg5M30.jR3EySQv8yI-aZDyt7EZ3WCM5Vpl7-4dzPqBNeqlIAw"
          },
          body: JSON.stringify({title,description,tag})
        });
        getNote()
        // const json = await response.json();
      }


    return (
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote, getNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;