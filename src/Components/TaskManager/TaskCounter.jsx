import "./TaskCounter.css"

const TaskCounter = ({tasks}) => {
   const totalTasks = tasks.length;
   const completedTasks = tasks.filter(task => task.completed).length;
   const pendingTasks = totalTasks - completedTasks;

    
  return (
    <>
    <div className="taskCounter">
        <div className='taskCounterBox total'>
            <h4>Total tasks: </h4>
            <img src="../../../public/assets/lista-de-verificacion.png" alt="task-list-icon" />
            <p>{totalTasks}</p>
        </div>
        <div className='taskCounterBox completed'>
            <h4>Completed tasks: </h4>
            <img src="../../../public/assets/comprobado.png" alt="checkbox-icon" />
            <p>{completedTasks}</p>
        </div>
        <div className='taskCounterBox pending'>
            <h4>Pending tasks:</h4>
             <img src="../../../public/assets/circulo.png" alt="circle-icon" />
            <p>{pendingTasks}</p>
        </div>
    </div>
    </>
  )
}

export default TaskCounter