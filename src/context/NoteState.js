import React,{useState} from 'react'
import NoteContext from './noteContext';

const NoteState=(props)=>{
    const notesInitial = [
        {
          "_id": "64d617b3b1d389cfef096dfc",
          "user": "64d5f289e00d387a699e30aa",
          "title": "My Title",
          "description": "Wake me early tomorrow",
          "tag": "personal",
          "date": "1691752371654",
          "__v": 0
        },
        {
          "_id": "64d617b4b1d389cfef096dfe",
          "user": "64d5f289e00d387a699e30aa",
          "title": "My Title",
          "description": "Wake me early tomorrow",
          "tag": "personal",
          "date": "1691752372266",
          "__v": 0
        },
        {
          "_id": "64d61de31f97a3d75c1afba2",
          "user": "64d5f289e00d387a699e30aa",
          "title": "My Title",
          "description": "Wake me early tomorrow",
          "tag": "personal",
          "date": "1691753955361",
          "__v": 0
        },
        {
            "_id": "64d617b3b1d389cfef096dfc",
            "user": "64d5f289e00d387a699e30aa",
            "title": "My Title",
            "description": "Wake me early tomorrow",
            "tag": "personal",
            "date": "1691752371654",
            "__v": 0
          },
          {
            "_id": "64d617b3b1d389cfef096dfc",
            "user": "64d5f289e00d387a699e30aa",
            "title": "My Title",
            "description": "Wake me early tomorrow",
            "tag": "personal",
            "date": "1691752371654",
            "__v": 0
          },
          {
            "_id": "64d617b3b1d389cfef096dfc",
            "user": "64d5f289e00d387a699e30aa",
            "title": "My Title",
            "description": "Wake me early tomorrow",
            "tag": "personal",
            "date": "1691752371654",
            "__v": 0
          },
          {
            "_id": "64d617b3b1d389cfef096dfc",
            "user": "64d5f289e00d387a699e30aa",
            "title": "My Title",
            "description": "Wake me early tomorrow",
            "tag": "personal",
            "date": "1691752371654",
            "__v": 0
          },
          {
            "_id": "64d617b3b1d389cfef096dfc",
            "user": "64d5f289e00d387a699e30aa",
            "title": "My Title",
            "description": "Wake me early tomorrow",
            "tag": "personal",
            "date": "1691752371654",
            "__v": 0
          },
          {
            "_id": "64d617b3b1d389cfef096dfc",
            "user": "64d5f289e00d387a699e30aa",
            "title": "My Title",
            "description": "Wake me early tomorrow",
            "tag": "personal",
            "date": "1691752371654",
            "__v": 0
          },
      ]
      const [notes, setnotes] = useState(notesInitial)

    return (
        <NoteContext.Provider value={{notes,setnotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;