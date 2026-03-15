import TaskItem from "./TaskItem";
import "./TaskManager.css"
import { useState } from 'react'

const TaskManager = () => {
    const [tasks, setTasks] = useState([
        { id: 1, taskName: "Estudiar", priority: true, completed: false },
        { id: 2, taskName: "Ir al gimnasio", priority: true, completed: false },
        { id: 3, taskName: "Hacer la compra", priority: false, completed: false }
    ]);
    const [inputValue, setInputValue] = useState("");

    const addTask = () => {
        if (!inputValue.trim()) return
        const newTask = {
            id: Date.now(),
            taskName: inputValue,
            priority:false,
            completed: false
        }
        setTasks(prev => [...prev, newTask])
        setInputValue("");
    }

    const deleteTask = (taskId) => {
        setTasks(prev => prev.filter(({id}) => taskId!==id ))
    }

    const toggleComplete = (id) => {
     setTasks(prev =>
       prev.map(task => {
           if (task.id === id) {
               return {
                   ...task,
                   completed: !task.completed
               }
           }
           return task
       })
   )
}
  return (
    <div>
        <div>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
        <button onClick={addTask}>Add task</button>
        </div>
       <div>
        <ul>
            {tasks.map((task) => {
               return  <TaskItem 
                key={task.id}
                task={task}
                deleteTask={deleteTask}
                toggleComplete={toggleComplete}
                />
            })}
        </ul>
       
        </div>
        
    </div>
  )
}

export default TaskManager