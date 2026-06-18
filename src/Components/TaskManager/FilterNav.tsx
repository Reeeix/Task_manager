import "./FilterNav.css"
import React from "react";
import { FilterNavProps } from "../../types";


const FilterNav = ({
  setFilter, filter,
  searchValue, setSearchValue,
  priorityFilter, typeFilter,
  showAdvancedFilters, setShowAdvancedFilters,
  setPriorityFilter, setTypeFilter, setSortOrder, sortOrder
} : FilterNavProps) => {

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
        <button
          className="sort-toggle"
          onClick={() => setSortOrder(prev => prev === "newestFirst" ? "oldestFirst" : "newestFirst")}
        >
          {sortOrder === "newestFirst" ? "↑ Oldest first" : "↓ Newest first"}
        </button>
      </div>

      {showAdvancedFilters && (
        <div className="advanced-filters-panel">
          <button className={priorityFilter === "Low"      ? "activeAdvFilter" : ""} onClick={() => setPriorityFilter(prev => prev === "Low" ? "" : "Low")}>Low</button>
          <button className={priorityFilter === "Medium"   ? "activeAdvFilter" : ""} onClick={() => setPriorityFilter(prev => prev === "Medium" ? "" : "Medium")}>Medium</button>
          <button className={priorityFilter === "High"     ? "activeAdvFilter" : ""} onClick={() => setPriorityFilter(prev => prev === "High" ? "" : "High")}>High</button>
          <button className={typeFilter === "Personal"     ? "activeAdvFilter" : ""} onClick={() => setTypeFilter(prev => prev === "Personal" ? "" : "Personal")}>Personal</button>
          <button className={typeFilter === "Health"       ? "activeAdvFilter" : ""} onClick={() => setTypeFilter(prev => prev === "Health" ? "" : "Health")}>Health</button>
          <button className={typeFilter === "Work"         ? "activeAdvFilter" : ""} onClick={() => setTypeFilter(prev => prev === "Work" ? "" : "Work")}>Work</button>
          <button className={typeFilter === "Shopping"     ? "activeAdvFilter" : ""} onClick={() => setTypeFilter(prev => prev === "Shopping" ? "" : "Shopping")}>Shopping</button>
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