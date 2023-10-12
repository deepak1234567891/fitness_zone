import React from "react";

const Memberdelete = (props) => {

    return (
    <>
    <div className="todo_style display-7">
    <br />
     {props.text} 
    <i className="fa-solid fa-delete-left w-50 m-2" style={{color:"red",cursor:"pointer"}} aria-hidden="true" onClick={() => {
        props.onSelect(props.id)
    }} />
     {/* <li> {props.text} </li> */}
     </div>
    </>
    );
};

export default Memberdelete;