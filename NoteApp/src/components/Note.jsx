import React from 'react';
import "./Note.css";
import { AiFillDelete } from "react-icons/ai";

function Note(props) {
  const formattedTime = new Date(props.note.time).toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  });
 <br/>

  const formattedDate = new Date(props.note.time).toLocaleString('en-US', {
    day: 'numeric',
    month: 'long'
   
  });

  return (
    <div className='note' style={{ backgroundColor: props.note.color }}>
      <textarea className='note_text' defaultValue={props.note.value} placeholder='enter something here...' maxLength={250}></textarea>
      <div className='note_footer'>
        <p>{formattedTime} - {formattedDate}</p>
        <AiFillDelete className='text-2xl cursor-pointer opacity-0' onClick={() => props.deleteNote(props.note.id)} />
      </div>
    </div>
  );
}

export default Note;
