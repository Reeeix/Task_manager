import "./TaskInput.css"

const TaskInput = ({inputValue, setInputValue, setPriority, priority, addTask, type, setType}) => {
  return (
        <section className="inputSection">
        <div className="divInput">
        <input className="textInput" type="text" value={inputValue} placeholder="Wash the dishes" onChange={(e) => setInputValue(e.target.value)}/>
        <p>Priority:</p> 
        <select name="prioritySelector" id="" onChange={(e) => {
          setPriority(e.target.value);
        }} value={priority}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <p>Type:</p>
        <select name="typeSelector" id="" value={type} onChange={(e) => {
          setType(e.target.value)
        }}>
          <option value="Personal">Personal</option>
          <option value="Health">Health</option>
          <option value="Work">Work</option>
          <option value="Shopping">Shopping</option>
        </select>
        <button className="addButton" onClick={addTask}>+</button>
        </div>
        </section>
  )
}

export default TaskInput