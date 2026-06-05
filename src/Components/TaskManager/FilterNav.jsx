import "./FilterNav.css"

const FilterNav = ({
  setFilter, filter,
  searchValue, setSearchValue,
  priorityFilter, typeFilter,
  showAdvancedFilters, setShowAdvancedFilters,
  setPriorityFilter, setTypeFilter
}) => {
  const toggleFilter = (value, setter) => {
    setter(prev => (prev === value ? "" : value));
  }

  return (
    <nav>
      <div className="filter-top-row">
        <div className="search-box">
          <input
            className="search-input"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search task"
          />
          <span className="search-icon">&#128269;</span>
        </div>
        <button
          className={`adv-toggle${showAdvancedFilters ? " adv-toggle--active" : ""}`}
          onClick={() => setShowAdvancedFilters(prev => !prev)}
        >
          {showAdvancedFilters ? "▴ Filters" : "▾ Filters"}
        </button>
      </div>

      {showAdvancedFilters && (
        <div className="advanced-filters-panel">
          <button className={priorityFilter === "Low"      ? "activeAdvFilter" : ""} onClick={() => toggleFilter("Low",      setPriorityFilter)}>Low</button>
          <button className={priorityFilter === "Medium"   ? "activeAdvFilter" : ""} onClick={() => toggleFilter("Medium",   setPriorityFilter)}>Medium</button>
          <button className={priorityFilter === "High"     ? "activeAdvFilter" : ""} onClick={() => toggleFilter("High",     setPriorityFilter)}>High</button>
          <button className={typeFilter === "Personal"     ? "activeAdvFilter" : ""} onClick={() => toggleFilter("Personal", setTypeFilter)}>Personal</button>
          <button className={typeFilter === "Health"       ? "activeAdvFilter" : ""} onClick={() => toggleFilter("Health",   setTypeFilter)}>Health</button>
          <button className={typeFilter === "Work"         ? "activeAdvFilter" : ""} onClick={() => toggleFilter("Work",     setTypeFilter)}>Work</button>
          <button className={typeFilter === "Shopping"     ? "activeAdvFilter" : ""} onClick={() => toggleFilter("Shopping", setTypeFilter)}>Shopping</button>
        </div>
      )}

      <div className="filter-tabs">
        <button className={filter === "all"       ? "active" : ""} onClick={() => setFilter("all")}>All</button>
        <button className={filter === "completed" ? "active" : ""} onClick={() => setFilter("completed")}>Completed</button>
        <button className={filter === "pending"   ? "active" : ""} onClick={() => setFilter("pending")}>Pending</button>
      </div>
    </nav>
  )
}

export default FilterNav