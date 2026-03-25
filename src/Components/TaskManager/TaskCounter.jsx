import "./TaskCounter.css"

const TaskCounter = ({tasks}) => {
   const totalTasks = tasks.length;
   const completedTasks = tasks.filter(task => task.completed).length;
   const pendingTasks = totalTasks - completedTasks;

    
  return (
    <>
    <div className="taskCounter">
        
        <div className='taskCounterBox total'>
            <img className="totalTasks" src="/assets/lista-de-verificacion.png" alt="task-list-icon" />
            <h4>Total tasks: </h4>
            <p>{totalTasks}</p>
        </div>
        <div className='taskCounterBox completed'>
            <h4>Completed tasks: </h4>
            <img className="completedTasks" src="/assets/comprobado.png" alt="checkbox-icon" />
            <p>{completedTasks}</p>
        </div>
        <div className='taskCounterBox pending'>
            <h4>Pending tasks:</h4>
             <img className="pendingTasks" src="/assets/circulo.png" alt="circle-icon" />
            <p>{pendingTasks}</p>
        </div>
    </div>
    </>
  )
}

export default TaskCounter