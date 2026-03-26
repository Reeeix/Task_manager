const AdvancedFilters = ({priorityFilter, typeFilter, showAdvancedFilters, setShowAdvancedFilters, setPriorityFilter, setTypeFilter}) => {
    const toggleFilter = (value, setter) => {
        setter(prev => (prev === value ? "" : value));
    }
  return (
    <div className="advancedFilters">
        <button onClick={() => setShowAdvancedFilters(prev => !prev)}>{showAdvancedFilters ? "▴ Advanced filters" : "▾ Advanced filters"}</button>
        {showAdvancedFilters && <div>
        <button className={priorityFilter === "Low" ? "activeAdvFilter" : ""} onClick={() => {toggleFilter("Low", setPriorityFilter)}}>Low</button>
        <button className={priorityFilter === "Medium" ? "activeAdvFilter" : ""} onClick={() => {toggleFilter("Medium", setPriorityFilter)}}>Medium</button>
        <button className={priorityFilter === "High" ? "activeAdvFilter" : ""} onClick={() => {toggleFilter("High", setPriorityFilter)}}>High</button>
        <button className={typeFilter === "Personal" ? "activeAdvFilter" : ""} onClick={() => {toggleFilter("Personal", setTypeFilter)}}>Personal</button>
        <button className={typeFilter === "Health" ? "activeAdvFilter" : ""} onClick={() => {toggleFilter("Health", setTypeFilter)}}>Health</button>
        <button className={typeFilter === "Work" ? "activeAdvFilter" : ""} onClick={() => {toggleFilter("Work", setTypeFilter)}}>Work</button>
        <button className={typeFilter === "Shopping" ? "activeAdvFilter" : ""} onClick={() => {toggleFilter("Shopping", setTypeFilter)}}>Shopping</button>
        </div>}
        </div>
  )
}

export default AdvancedFilters