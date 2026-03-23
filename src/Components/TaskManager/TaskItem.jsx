const TaskItem = ({task, deleteTask, toggleComplete}) => {
    const {taskName, id, priority, completed, type} = task;

   return (

                <li className="taskBox" style={{ textDecoration: completed ? "line-through" : "none" }}>
                  {taskName}
                        <div className="badgesRow">
                            <span className={priority}>{priority}</span>
                            <span className={type}>{type}</span>
                        </div>
                    <div className="handleTasks">
                        <button onClick={() => deleteTask(id)}>Eliminar</button>
                        <input type="checkbox" onChange={() => toggleComplete(id)} checked={completed}/>
                    </div>
                </li>

            )
}

export default TaskItem