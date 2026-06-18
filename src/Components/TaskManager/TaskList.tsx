import TaskItem from './TaskItem'
import React from 'react'
import { Task } from "../../types"
import { TaskListProps } from '../../types'
/*
TaskList no recibe todas las tareas (tasks), sino filteredTasks.

TaskManager decide qué tareas sobreviven a los filtros.
TaskList solo se encarga de recorrerlas con map() y renderizar un TaskItem por cada una.
*/

const TaskList = (props: TaskListProps) => {
  const {sortedTasks, ...childProps} = props;
  if (sortedTasks.length === 0) { return ( <h2 className="no-tasks-title">No tasks found</h2>)}
  else { return (
  <ul>
           {sortedTasks.map((task) => {
              return  <TaskItem 
               key={task.id}
               task={task}
               {...childProps}
               />
           })}
       </ul>
  ) }
}

export default TaskList