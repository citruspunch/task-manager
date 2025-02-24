import React, { useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import CategoryFilter from "./CategoryFilter";

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("");

  const handleAddTask = (taskName) => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      category: "General",
    };
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  const filteredTasks = filter
    ? tasks.filter((task) => task.category === filter)
    : tasks;

  return (
    <div>
      <h1>Task Manager</h1>
      <AddTask onAdd={handleAddTask} />
      <CategoryFilter
        categories={["General", "Work", "Personal"]}
        onFilter={handleFilterChange}
      />
      <TaskList tasks={filteredTasks} onDelete={handleDeleteTask} />
    </div>
  );
}
