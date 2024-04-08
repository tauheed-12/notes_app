import React from 'react'
import { useState } from 'react'
const AddNotes = (props) => {
  const[title, settitle] = useState("")
  const[content, setContent] = useState("")
  const handlechange = (event)=>{
    const{name, value} = event.target;
    if(name === 'title'){
        settitle(value);
    }
    else if(name === 'content'){
        setContent(value);
    }
  }
  const handlesubmit = (event)=>{
    event.preventDefault();
    console.log(title);
    console.log(content);
    props.onAdd({title, content});
    settitle("")
    setContent("");
  }
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <textarea placeholder='Title' id='title' name='title' onChange={handlechange}></textarea>
        <textarea placeholder='Content' id='content' name='content' onChange={handlechange}></textarea>
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default AddNotes
