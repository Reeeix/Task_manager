import { JSX } from "react/jsx-runtime";
import React from "react";
import "./TaskItem.css"
import { Task } from "../../types"
import { TaskItemProps } from "../../types";
/*
task es un objeto que contiene toda la información de una tarea:
id, taskName, priority, type y completed.
Si completed es true, la tarea se muestra tachada.
La lógica de cambiar completed está en TaskManager (toggleComplete),
TaskItem solo refleja visualmente ese estado.
*/

const TaskItem:React.FC<TaskItemProps> = ({task, deleteTask, toggleComplete, startEditing, editingId, editingValue, setEditingValue, handleSave, stopEditing}: TaskItemProps) => {
    const {taskName, id, priority, completed, type} = task;
    let content: JSX.Element;
    if (id === editingId) {
        content = (
            <li className="taskBox" onKeyDown={(e:React.KeyboardEvent) => {if (e.key === "Escape") {stopEditing()}}}>
                                    <div className="editRow" onClick={(e) => e.stopPropagation()}>
                                        <input className="editInput" value={editingValue} onClick={(e) => e.stopPropagation()} onKeyDown={(e) => {if (e.key === "Enter") {
                                            handleSave(task, editingId)
                                        }}} onChange={(e) => setEditingValue(e.target.value)} />
                                        <button className="saveButton" onClick={(e) => { e.stopPropagation(); handleSave(task, editingId); }}>✅</button>
                                    </div>
                    <div className="badgesAndButtonContainer">
                        <div className="badgesRow">
                        </div>
                    </div>
                </li>
        )
    } else {
        content = (
            <li className="taskBox" onClick={() => toggleComplete(id)}>
                  <span style={{ textDecoration: completed ? "line-through" : "none" }}>
                    {taskName}
                  </span>
                    <div className="badgesAndButtonContainer">
                        <div className="badgesRow">
                            <span className={priority}>{priority}</span>
                            <span className={type}>{type}</span>
                        </div>
                        <div className="taskActions">
                            <button className="editButton" onClick={(e) => { e.stopPropagation(); startEditing(id, taskName); }}>✏️</button>
                            <button className="deleteButton" onClick={(e) => { e.stopPropagation(); deleteTask(id); }}>X</button>
                        </div>
                    </div>
                </li>
        )
    }
    return <>{content}</>;
}

export default TaskItem