import React, { useState } from 'react';

const Notelist = (props) => {
  const [isEdited, setIsEdited] = useState(false);
  const [editedNote, setEditedNote] = useState({});

  const handleEdit = (id) => {
    setIsEdited(true);
    setEditedNote(props.notes.find(note => note.id === id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the edited note
    setIsEdited(false);
    props.onUpdate(editedNote); // Assuming you have an onEdit prop to handle saving changes
  };

  return (
    <div>
      {props.notes.map((note) => (
        <div key={note.id}>
          {isEdited && editedNote.id === note.id ? (
            <div>
              <form onSubmit={handleSubmit}>
                <input type='text' placeholder='title' value={editedNote.title || ''} onChange={(e) => setEditedNote({ ...editedNote, title: e.target.value })}></input>
                <textarea placeholder='content' value={editedNote.content || ''} onChange={(e) => setEditedNote({ ...editedNote, content: e.target.value })}></textarea>
                <button type='submit'>Save</button>
              </form>
            </div>
          ) : (
            <div>
              <h1>{note.title}</h1>
              <p>{note.content}</p>
              <button onClick={() => props.onDelete(note.id)}>delete</button>
              <button onClick={() => handleEdit(note.id)}>Edit</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Notelist;
