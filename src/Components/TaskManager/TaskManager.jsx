import Header from "../Header/Header";
import TaskCounter from "./TaskCounter";
import TaskInput from "./TaskInput";
import TaskItem from "./TaskItem";
import "./TaskManager.css"
import { useState } from 'react'

const TaskManager = () => {
    const [tasks, setTasks] = useState([
        { id: 1, taskName: "Estudiar", priority: "Low", type:"Work", completed: false },
        { id: 2, taskName: "Ir al gimnasio", priority: "Low", type:"Work", completed: false },
        { id: 3, taskName: "Hacer la compra", priority: "Low", type:"Work", completed: false }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [priority, setPriority] = useState("Low");
    const [type, setType] = useState("Personal");

    const addTask = () => {
        if (!inputValue.trim()) return
        const newTask = {
            id: Date.now(),
            taskName: inputValue,
            priority:priority,
            type: type,
            completed: false
        }
        setTasks(prev => [...prev, newTask])
        setInputValue("");
        setPriority("Low");
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

       <TaskCounter tasks={tasks}/>
       
       <TaskInput 
       inputValue={inputValue}
       priority={priority} 
       setInputValue={setInputValue} 
       setPriority={setPriority}
       addTask={addTask}
       type={type}
       setType={setType}
       />
       <div>
        <div>

        </div>
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