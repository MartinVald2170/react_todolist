import React from "react";
import "./Input.css";

export const Input = ({onSubmit, value, onChange}) => {
    return ( 
    <form onSubmit={onSubmit}>
        <input 
        className="InputBar" 
        type="text" 
        placeholder="Enter Task..." 
        value={value} 
        onChange={onChange}
    />
    <button className="SubmitButtn">Submit</button>
</form>
    );
};