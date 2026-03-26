import Header from "../Header/Header";
import AdvancedFilters from "./AdvancedFilters";
import FilterNav from "./FilterNav";
import TaskCounter from "./TaskCounter";
import TaskInput from "./TaskInput";
import TaskItem from "./TaskItem";
import TaskList from "./TaskList";
import "./TaskManager.css"
import { useState, useEffect } from 'react'

const TaskManager = () => {
    const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
    });
    const [inputValue, setInputValue] = useState("");
    const [priority, setPriority] = useState("Low");
    const [type, setType] = useState("Personal");
    const [filter, setFilter] = useState("all");
    const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
    const [priorityFilter, setPriorityFilter] = useState("");
    const [typeFilter, setTypeFilter] = useState("");

    useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const filteredTasks = tasks.filter(task => {
        if (filter === "completed" && !task.completed) return false;
        if (filter === "pending" && task.completed) return false;
        if (priorityFilter !== "" && task.priority !== priorityFilter) {
        return false;
        }
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
       <AdvancedFilters 
       setPriorityFilter={setPriorityFilter}
       setShowAdvancedFilters={setShowAdvancedFilters}
       setTypeFilter={setTypeFilter}
       showAdvancedFilters={showAdvancedFilters}
       typeFilter={typeFilter}
       priorityFilter={priorityFilter}/>
       <FilterNav setFilter={setFilter} filter={filter}/>
       <TaskList 
       toggleComplete={toggleComplete} 
       filteredTasks={filteredTasks} 
       deleteTask={deleteTask}/>
       
    </div>
  )
}

export default TaskManager