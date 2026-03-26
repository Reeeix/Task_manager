import TaskItem from './TaskItem'

const TaskList = ({filteredTasks, deleteTask, toggleComplete}) => {
  return (
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
  )
}

export default TaskList