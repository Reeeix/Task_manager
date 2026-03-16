import "./TaskInput.css"

const TaskInput = ({inputValue, setInputValue, setPriority, priority, addTask}) => {
  return (
        <section className="inputSection">
        <div className="divInput">
        <input className="textInput" type="text" value={inputValue} placeholder="Wash the dishes" onChange={(e) => setInputValue(e.target.value)}/>
        <p>Priority:</p> 
        <input type="checkbox" checked={priority} onChange={() => setPriority(prev => !prev)} />
        <button onClick={addTask}>+</button>
        </div>
        </section>
  )
}

export default TaskInput