import React, { useState } from "react";
import "./Task.css";

export function Task({ item, onUpdate, onDelete }) {
  const [Edit, setEdit] = useState(false);
  const [newValue, setNewValue] = useState(item.title);
  function hadleSubmit(e) {
    e.preventDefault();
  }

  function hadleChange(e) {
    const value = e.target.value;
    setNewValue(value);
  }

  function hadleClick() {
    onUpdate(item.id, newValue);
    setEdit(false);
  }

  function Formedit() {
    return (
      <form className="dos" onSubmit={hadleSubmit}>
        <input type="text" onChange={hadleChange} value={newValue} />
        <button className="buttonupdate" onClick={hadleClick}>
          Update
        </button>
      </form>
    );
  }

  function TaskView() {
    return (
      <div className="taskinfo">
        <span>
        {item.title}
        </span>
        <button className="buttomedit" onClick={() => setEdit(true)}>Edit</button>{" "}
        <button className="buttomdelete" onClick={(e) => onDelete(item.id)}>Delete</button>
        
      </div>
    );
  }

  return <div className="task">{Edit ? Formedit() : TaskView()}</div>;
}
