const TaskItem = ({task, deleteTask, toggleComplete}) => {
    const {taskName, id, priority, completed} = task;
   return (

                <li className="taskBox" style={{ textDecoration: completed ? "line-through" : "none" }}>
                  {taskName} {priority ? "‼️" : "😌"}
                    <div className="handleTasks">
                        <button onClick={() => deleteTask(id)}>Eliminar</button>
                        <input type="checkbox" onChange={() => toggleComplete(id)} checked={completed}/>
                    </div>
                </li>

            )
}

export default TaskItem