import React, { useState } from "react";
import { Task } from "./Task";
import "./Taks.css";

export function Taks() {
  
    const [title, setTitle] = useState("Hola Tile");
    const [tasks, setTasks] = useState([]);


  
  function handelChange(e) {
    const value = e.target.value;
    setTitle(value);
}

function handleSubmit(e) {
    e.preventDefault();
    const newTask = {
        id : crypto.randomUUID(),
        title : title,
        completed : false
    };
    setTasks([...tasks, newTask]);
    setTitle("");
}


function handleUpdate (id, value){
    const temp = [...tasks];
    const item = temp.find((item) => item.id === id);
    item.title = value;
    setTasks(temp);
}

function handleDelete (id){
    const temp = [...tasks];
    const item = temp.filter((item) => item.id !== id);
    setTasks(item);
}

  return (
    <div className="taskContainer">
      <form className="taskCCreateForm" onSubmit={handleSubmit}>
        <input onChange={handelChange} className="taskInput" value={title} />
        <input
          onClick={handleSubmit}
          className="taskButton"
          type="submit"
          value="Create Task"
        />
      </form>
      <div className="tasksContainer">
        {
            tasks.map((item) => (
                <Task key = {item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete}  />
            ))
        }
      </div>
    </div>
  );
}
