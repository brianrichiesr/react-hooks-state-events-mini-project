import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [allTasks, setAllTasks] = useState(TASKS);
  const [tasksForFilter, setTasksForFilter] = useState(TASKS);
  const deleteTask = (taskText) => {
    const newTasks = allTasks.filter(task => {
      return task.text !== taskText
    })
    setAllTasks(newTasks);
    const editTasksForFilter = tasksForFilter.filter(task => {
      return task.text !== taskText;
    })
    setTasksForFilter(editTasksForFilter);
  }
  const filterTask = (taskText) => {
    const newTasks = tasksForFilter.filter(task => {
      if (taskText === "All") {
        return true;
      } else {
        return task.category === taskText
      }
    })
    setAllTasks(newTasks)
  }
  const onTaskFormSubmit = (taskObj) => {
    const updatedTasksForFilter = [
      ...tasksForFilter,
      taskObj
     ]
    setTasksForFilter(updatedTasksForFilter);
   const updatedTasks = [
    ...allTasks,
    taskObj
   ]
   setAllTasks(updatedTasks);

  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter filterTask={filterTask} categories={CATEGORIES} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={allTasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
