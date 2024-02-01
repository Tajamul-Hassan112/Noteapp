// import React from "react";
// import Note from "../components/Note";
// import "./NoteList.css";
// import "../App.css"

// function NoteList(props) {
//     const notes=props.notes;

//   return (
//     <div className="notelist">
//       <h2>Notes</h2>
//       <div className="note-list_notes custom-scroll">
        
//        {
//         notes?.length>0 ?
//         notes.map((item)=><Note key={item.id} note={item} />)
//         : <h3>no notes present</h3>
//        }
//       </div>
//     </div>
//   );
// }

// export default NoteList;
// NoteList.jsx
import React from "react";
import Note from "../components/Note";
import "./NoteList.css";
import "../App.css";

function NoteList(props) {
  const notes = props.notes;

  return (
    <div className="notelist">
      <h2 className="text-2xl font-bold">Notes</h2>
      <div className="note-list_notes custom-scroll">
        {notes?.length > 0 ? (
          notes.map((item) => (
            <Note key={item.id} note={item} deleteNote={props.deleteNote} />
          ))
        ) : (
          <h3 className="text-3xl font-bold text-red-600  ">No Notes Present </h3>
        )}
      </div>
    </div>
  );
}

export default NoteList;
