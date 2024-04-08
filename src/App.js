import React from 'react'
import { useState } from 'react'
import AddNotes from './AddNotes'
import Notelist from './Notelist'
const App = () => {
  const[notes, Setnotes] = useState([])
  const addNotes = (note)=>{
    Setnotes([...notes,{...note, id: Date.now()}])
  }

  const onDelete = (id)=>{
    Setnotes(notes.filter((note)=>note.id !== id));
  }

  const onUpdate = (updatedNote)=>{
     Setnotes(notes.map((note)=>(note.id === updatedNote.id ? updatedNote: note)))
  }
  return (
    <div>
      <AddNotes onAdd={addNotes}/>
      <Notelist notes={notes} onDelete={onDelete} onUpdate={onUpdate}/>
    </div>
  )
}

export default App
