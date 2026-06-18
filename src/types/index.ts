export interface Task {
  id: number;
  taskName: string;
  priority: "Low" | "Medium" | "High";
  type: "Work" | "Health" | "Personal" | "Shopping";
  completed: boolean;
}

export interface TaskListProps {
  sortedTasks: Task[];

  deleteTask: (id: number) => void;

  toggleComplete: (id: number) => void;
  
  startEditing: (id: number, taskName: string) => void;
  editingId: number | null;
  editingValue: string;
  setEditingValue: React.Dispatch<React.SetStateAction<string>>;
  handleSave: (task: Task, editingId : number) => void;
  stopEditing: () => void;
}

export interface TaskItemProps {
  task: Task;
  deleteTask: (id: number) => void;
  toggleComplete: (id: number) => void;
  startEditing: (id: number, taskName: string) => void;
  editingId: number | null;
  editingValue: string;
  setEditingValue: React.Dispatch<React.SetStateAction<string>>;
  handleSave: (task: Task, editingId : number) => void;
  stopEditing: () => void;
}

export interface TaskInputProps {
  inputValue: string,
  setInputValue: (value: string) => void,
  setPriority: React.Dispatch<React.SetStateAction<"Low" | "Medium" | "High">>
  priority: string,
  addTask: () => void,
  type: string,
  setType: React.Dispatch<React.SetStateAction<"Personal" | "Health" | "Work" | "Shopping">>
}

export interface TaskCounterProps {
    tasks: Task[]
}

export interface FilterNavProps {
  setFilter: React.Dispatch<React.SetStateAction<"all" | "completed" | "pending">>;
  filter: "all" | "completed" | "pending";
  
  searchValue: string;
  setSearchValue: (value: string) => void;
  
  priorityFilter: "" | "Low" | "Medium" | "High"; 
  setPriorityFilter: React.Dispatch<React.SetStateAction<"" | "Low" | "Medium" | "High">>;
  
  typeFilter: "" | "Personal" | "Work" | "Health" | "Shopping";
  setTypeFilter: React.Dispatch<React.SetStateAction<"" | "Personal" | "Work" | "Health" | "Shopping">>;
  
  showAdvancedFilters: boolean;
  setShowAdvancedFilters: React.Dispatch<React.SetStateAction<boolean>>;
  
  sortOrder: "newestFirst" | "oldestFirst";
  setSortOrder: (value: React.SetStateAction<"newestFirst" | "oldestFirst">) => void;
}