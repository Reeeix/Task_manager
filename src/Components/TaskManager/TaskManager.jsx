import Header from "../Header/Header";
import FilterNav from "./FilterNav";
import TaskCounter from "./TaskCounter";
import TaskInput from "./TaskInput";
import TaskItem from "./TaskItem";
import "./TaskManager.css"
import { useState } from 'react'

const TaskManager = () => {
    const [tasks, setTasks] = useState([
        { id: 1, taskName: "Estudiar", priority: "Medium", type:"Work", completed: false },
        { id: 2, taskName: "Ir al gimnasio", priority: "High", type:"Personal", completed: false },
        { id: 3, taskName: "Hacer la compra", priority: "Low", type:"Health", completed: false }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [priority, setPriority] = useState("Low");
    const [type, setType] = useState("Personal");
    const [filter, setFilter] = useState("all");
    const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
    const [priorityFilter, setPriorityFilter] = useState("");
    const [typeFilter, setTypeFilter] = useState("");

    const filteredTasks = tasks.filter(task => {
 
   if (filter === "completed" && !task.completed) return false;
   if (filter === "pending" && task.completed) return false;
   if (priorityFilter !== "" && task.priority !== priorityFilter) {
       return false;
   }

   // filtro por tipo
   if (typeFilter !== "" && task.type !== typeFilter) {
       return false;
   }

   return true;


})

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
       <div className="advancedFilters">
        <button onClick={() => setShowAdvancedFilters(prev => !prev)}>{showAdvancedFilters ? "▴ Advanced filters" : "▾ Advanced filters"}</button>
        {showAdvancedFilters && <div>
        <button className={priorityFilter === "Low" ? "activeAdvFilter" : ""} onClick={() => {setPriorityFilter(prev => prev === "Low" ? "" : "Low");}}>Low</button>
        <button className={priorityFilter === "Medium" ? "activeAdvFilter" : ""} onClick={() => {setPriorityFilter(prev => prev === "Medium" ? "" : "Medium");}}>Medium</button>
        <button className={priorityFilter === "High" ? "activeAdvFilter" : ""} onClick={() => {setPriorityFilter(prev => prev === "High" ? "" : "High");}}>High</button>
        <button className={typeFilter === "Personal" ? "activeAdvFilter" : ""} onClick={() => {setTypeFilter(prev => prev === "Personal" ? "" : "Personal")}}>Personal</button>
        <button className={typeFilter === "Health" ? "activeAdvFilter" : ""} onClick={() => {setTypeFilter(prev => prev === "Health" ? "" : "Health")}}>Health</button>
        <button className={typeFilter === "Work" ? "activeAdvFilter" : ""} onClick={() => {setTypeFilter(prev => prev === "Work" ? "" : "Work")}}>Work</button>
        <button className={typeFilter === "Shopping" ? "activeAdvFilter" : ""} onClick={() => {setTypeFilter(prev => prev === "Shopping" ? "" : "Shopping")}}>Shopping</button>
        </div>}
        </div>
       <FilterNav setFilter={setFilter} filter={filter}/>
   
       <ul>
           {filteredTasks.map((task) => {
              return  <TaskItem 
               key={task.id}
               task={task}
               deleteTask={deleteTask}
               toggleComplete={toggleComplete}
               />
           })}
       </ul>
    </div>
  )
}

export default TaskManager