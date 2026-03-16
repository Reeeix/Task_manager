import Header from "../Header/Header";
import TaskInput from "./TaskInput";
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
    const [priority, setPriority] = useState(false);

    const addTask = () => {
        if (!inputValue.trim()) return
        const newTask = {
            id: Date.now(),
            taskName: inputValue,
            priority:priority,
            completed: false
        }
        setTasks(prev => [...prev, newTask])
        setInputValue("");
        setPriority(false);
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
       <Header/>
       <TaskInput 
       inputValue={inputValue}
       priority={priority} 
       setInputValue={setInputValue} 
       setPriority={setPriority}
       addTask={addTask}
       />
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