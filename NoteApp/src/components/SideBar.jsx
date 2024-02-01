// // import React from "react";
// // import "./SideBar.css";
// // function SideBar() {
// //   const colors = ["#fe9b72", "#fec971", "#00d4fe", "#b693fd", "#e4ee91"];
// //   return (
// //     <div className="sidebar">
// //       <img src="./images/plus.png" alt="" />
// //       <ul className="sidebar_list">
// //         {colors.map((item, index) => (
// //           <li
// //             key={index}
// //             className="sidebar-list_item"
// //             style={{ backgroundColor: item }}
// //           />
// //         ))}
// //       </ul>
// //       <img src="./images/delete.png" alt="" />
// //     </div>
// //   );
// // }

// // export default SideBar;
// import React, { useState } from "react";
// import "./SideBar.css";

// function SideBar() {
//   const colors = ["#fe9b72", "#fec971", "#00d4fe", "#b693fd", "#e4ee91"];
//   const[listOpened,setListOpened]=useState(false)

//   return (
//     <div className="sidebar">
//       <img src="./images/plus.png" alt="" onClick={()=>(setListOpened(!listOpened))}/>
//       {/* <ul className={`sidebar_list${listOpened ? "sidebar_list_active" : ""}`}> */}
//       <ul className={`sidebar_list ${listOpened ? "sidebar_list_active" : ""}`}>

//         {colors.map((item, index) => (
//           <li
//             key={index}
//             className="sidebar_list_item"
//             style={{ backgroundColor: item }}
//             onClick={()=>props.addNote()}
//           >
            
//             &nbsp;
//           </li>
//         ))}
//       </ul>
      
//     </div>
//   );
// }

// export default SideBar;
import React, { useState } from "react";
import "./SideBar.css";

function SideBar(props) {
  const colors = ["#FF00FF", "#FFC0CB", "#00d4fe", "#b693fd", "#e4ee91","#CD5C5C"];
  const [listOpened, setListOpened] = useState(false);

  return (
    <div className="sidebar">
      <img src="./images/plus.png" alt="" onClick={() => setListOpened(!listOpened)} />
      <ul className={`sidebar_list ${listOpened ? "sidebar_list_active" : ""}`}>
        {colors.map((item,index) => (
          <li
            key={index}
            className="sidebar_list_item"
            style={{ backgroundColor: item }}
            onClick={() => props.addnote(item)} 
          >
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
