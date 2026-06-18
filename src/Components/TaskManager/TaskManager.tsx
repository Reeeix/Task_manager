import Header from "../Header/Header";
import FilterNav from "./FilterNav";
import TaskCounter from "./TaskCounter";
import TaskInput from "./TaskInput";
import TaskItem from "./TaskItem";
import TaskList from "./TaskList";
import "./TaskManager.css"
import { useState, useEffect } from 'react'
import { Task } from "../../types"


/*
TaskManager es el componente principal.

Responsabilidades:
- Gestionar el estado de las tareas
- Añadir, eliminar y completar tareas
- Aplicar filtros
- Guardar tareas en localStorage

Flujo:
TaskManager → TaskList → TaskItem
*/


const TaskManager = () => {
    const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? (JSON.parse(savedTasks) as Task[]) : [];
});
    const [inputValue, setInputValue] = useState("");
    const [priority, setPriority] = useState<"Low" | "Medium" | "High">("Low");
    const [type, setType] = useState<"Personal" | "Health" | "Work" | "Shopping">("Personal");
    const [filter, setFilter] = useState<"all" | "completed" | "pending">("all");
    const [showAdvancedFilters, setShowAdvancedFilters] = useState<boolean>(false);
    const [priorityFilter, setPriorityFilter] = useState<"" | "Low" | "Medium" | "High">("");
    const [typeFilter, setTypeFilter] = useState< "" |"Personal" | "Health" | "Work" | "Shopping">("");
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editingValue, setEditingValue] = useState("");
    const [searchValue, setSearchValue] = useState("");
    const [sortOrder, setSortOrder] = useState<"newestFirst" | "oldestFirst">("newestFirst");

    // Guarda automáticamente las tareas en localStorage
    // cada vez que cambia el estado tasks
    useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);


    // Filtra (excluye) tareas según el estado (all/completed/pending),
    // la prioridad y el tipo seleccionados.
    // Si una tarea no cumple algún filtro → return false.
    // Si no hay motivos para excluirla → return true.
    // Por eso cuando el filtro es "all" y no hay otros filtros activos,
    // todas las tareas sobreviven al filtro.
    const filteredTasks = tasks.filter( (task:Task) => {
        if (filter === "completed" && !task.completed) {return false};
        if (filter === "pending" && task.completed) {return false};
        if (priorityFilter !== "" && task.priority !== priorityFilter) {return false};
        if (typeFilter !== "" && task.type !== typeFilter) {return false};
        if (searchValue !== "" && !task.taskName.toLowerCase().includes(searchValue.toLowerCase())) {return false}
         return true;
        })
    
    const sortedTasks = filteredTasks.sort((a: Task, b: Task) => {
        if (sortOrder === "newestFirst") {
           return b.id - a.id
        } else {
            return a.id - b.id
        }
    })

    // Añade una nueva tarea al estado tasks
    const addTask = () => {
        if (!inputValue.trim()) return
        const newTask: Task = {
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
    // Elimina la tarea cuyo id coincide con taskId
    const deleteTask = (taskId: number) => {
        setTasks(prev => prev.filter(({id}) => taskId!==id ))
    }
    // Cambia completed de true a false o viceversa
    const toggleComplete = (id:number) => {
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
    //Función que hace que entremos en modo editar tarea
    const startEditing = (id:number, taskName:string) => {
        setEditingId(id);           //Recogemos el ID de la tarea a editar
        setEditingValue(taskName)     //Al principio, el input será igual al nombre que teníamos
    }

    const stopEditing = () => {
        setEditingId(null);
        setEditingValue("");
    }
    //Función que guarda la tarea editada
    const handleSave = () => {
  setTasks(prev =>
    prev.map(task =>
      task.id === editingId
        ? { ...task, taskName: editingValue }
        : task
    )
  );

  stopEditing();
};
    //Renderizamos todo
  return (
    <div className="task-manager-body">
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
       <FilterNav
       setFilter={setFilter}
       setSortOrder={setSortOrder}
       sortOrder={sortOrder}
       filter={filter}
       searchValue={searchValue}
       setSearchValue={setSearchValue}
       priorityFilter={priorityFilter}
       typeFilter={typeFilter}
       showAdvancedFilters={showAdvancedFilters}
       setShowAdvancedFilters={setShowAdvancedFilters}
       setPriorityFilter={setPriorityFilter}
       setTypeFilter={setTypeFilter}/>
       <TaskList 
       toggleComplete={toggleComplete} 
       sortedTasks={sortedTasks}
       deleteTask={deleteTask}
       startEditing={startEditing}
       editingId={editingId}
       editingValue={editingValue}
       setEditingValue={setEditingValue}
       handleSave={handleSave}
       stopEditing={stopEditing}/>
       
    </div>
  )
}

export default TaskManager