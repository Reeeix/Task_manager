import "./TaskItem.css"

const TaskItem = ({task, deleteTask, toggleComplete}) => {
    const {taskName, id, priority, completed, type} = task;

   return (

                <li className="taskBox" onClick={() => toggleComplete(id)}>
                  <span style={{ textDecoration: completed ? "line-through" : "none" }}>
                    {taskName}
                  </span>
                    <div className="badgesAndButtonContainer">
                        <div className="badgesRow">
                            <span className={priority}>{priority}</span>
                            <span className={type}>{type}</span>
                        </div>
                        <button className="deleteButton" onClick={() => deleteTask(id)}>X</button>
                    </div>
                </li>

            )
}

export default TaskItem