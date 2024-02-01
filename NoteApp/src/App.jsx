// // import React, { useState } from 'react'
// // import NoteList from './components/NoteList'
// // import SideBar from "./components/SideBar"
// // import "./App.css"

// // function App() {
// //   const [notes,setNotes]=useState[{
// //     text: "heinxjknc", 
// //     color: "magenta",
// //      time: "4:32pm"
// //   },

// // {
// //   text: "heinxjknc", color: "pink", time: "4:32pm"
// // },{
// //   text: "heinxjknc", color: "blueviolet", time: "4:32pm"
// // },{
// //   text: "heinxjknc", color: "indianred", time: "4:32pm"
// // },{
// //   text: "heinxjknc", color: "green", time: "4:32pm"
// // },{
// //   text: "heinxjknc", color: "orange", time: "4:32pm"
// // }]
// // const addNote=(color)=>{
// // const copyNotes=[...notes]
// // copyNotes.push({text:"New note",color, time:Date.now()
// // }),
// // setNotes(copyNotes)
// //   return (
// //     <div className='App custom-scroll'>
// //        <SideBar addnote={addNote}/>
// //       <NoteList notes={notes}/>

     
// //     </div>
// //   )
// // }

// // export default App;
// import React, { useState } from 'react';
// import NoteList from './components/NoteList';
// import SideBar from "./components/SideBar";
// import "./App.css";

// function App() {
//   const [notes, setNotes] = useState([])
    

//   const addNote = (color) => {
    
//     const copyNotes = [...notes];
//     copyNotes.push({ text: "New note", color,id:Date.now()+ ""+Math.floor(Math.random()*78) ,time: Date.now() }); //id:Date.now()+ ""+Math.floor(Math.random()*78) it will produce the new id every time 
//     setNotes(copyNotes);
//   };
//   const deleteNote = (id) => {
//     const tempNotes = [...notes];
//     const index = tempNotes.findIndex(item => item.id === id);
//     if (index < 0) return;
//     tempNotes.splice(index, 1);
//     setNotes(tempNotes);
//   };
  
  

//   return ( 
//     <div className='App custom-scroll'>
//       <SideBar addnote={addNote} />
//       <NoteList notes={notes}  deleteNote={deleteNote}/>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import NoteList from './components/NoteList';
import SideBar from "./components/SideBar";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (color) => {
    const copyNotes = [...notes];
    copyNotes.unshift({ text: "New note", color, id: Date.now() + "" + Math.floor(Math.random() * 78), time: Date.now() });
    setNotes(copyNotes);
  };

  const deleteNote = (id) => {
    const tempNotes = [...notes];
    const index = tempNotes.findIndex(item => item.id === id);
    if (index < 0) return;
    tempNotes.splice(index, 1);
    setNotes(tempNotes);
  };

  return (
    <div className='App custom-scroll'>
      <SideBar addnote={addNote} />
      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  );
}

export default App;
