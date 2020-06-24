import React from "react"; 
import "./Item.css";

export const Item = ({checked, id, crossItem, value, date}) => {
    return (
    <li className="ListItem" id={id}>
        <div className="TitleCont">
            <input 
            type="checkbox" 
            checked={checked} 
            onChange={crossItem} 
            className="Checkbox"
            />
            <p className={checked ? "Strike ToDoText" : "ToDoTesk"}>{value}</p>

        </div>
        <span className="DateText">{date}</span>
    </li>
    );
};