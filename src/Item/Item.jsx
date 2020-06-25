import React from "react"; 
import "./Item.css";

export const Item = ({checked, 
    id, 
    crossItem, 
    value, 
    date, 
    editingState, 
    setEditing, 
    deactivateEditing,
    editTask,
}) => {
    return (
    <li className="ListItem" id={id}>
        <div className="TitleCont">
            <input 
            type="checkbox" 
            checked={checked} 
            onChange={crossItem} 
            className="Checkbox"
            />
           { !editingState && (
           <p className={checked ? "Strike ToDoText" : "ToDoTesk"} 
           onClick={setEditing}>
               {value}</p> 
           )}
           { editingState && (
            <form className="Editing" onSubmit={deactivateEditing} >
                <input className="ToDoText" onChange={editTask} value={value} />
             </form>
        )}

        </div>
        <span className="DateText">{date}</span>
    </li>
    );
};