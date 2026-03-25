import "./FilterNav.css"

const FilterNav = ({setFilter, filter}) => {
  return (
    <nav>
        <button
        className={filter === "all" ? "active" : ""}
        onClick={() => setFilter("all")}
        >
        All
        </button>

        <button
        className={filter === "completed" ? "active" : ""}
        onClick={() => setFilter("completed")}
        >
        Completed
        </button>

        <button
        className={filter === "pending" ? "active" : ""}
        onClick={() => setFilter("pending")}
        >
        Pending
        </button>
    </nav>
  )
}

export default FilterNav