import TaskItem from './TaskItem'
/*
TaskList no recibe todas las tareas (tasks), sino filteredTasks.

TaskManager decide qué tareas sobreviven a los filtros.
TaskList solo se encarga de recorrerlas con map() y renderizar un TaskItem por cada una.
*/
const TaskList = ({filteredTasks, deleteTask, toggleComplete, editingId, setEditingId, startEditing, editingValue, setEditingValue, handleSave, stopEditing}) => {
  return (
   <ul>
           {filteredTasks.map((task) => {
              return  <TaskItem 
               key={task.id}
               task={task}
               deleteTask={deleteTask}
               toggleComplete={toggleComplete}
               editingId={editingId}
               startEditing={startEditing}
               editingValue={editingValue}
               setEditingValue={setEditingValue}
               handleSave={handleSave}
               setEditingId={setEditingId}
               stopEditing={stopEditing}
               />
           })}
       </ul>
  )
}

export default TaskList