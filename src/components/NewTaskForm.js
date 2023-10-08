import React, { useState } from "react";

function NewTaskForm( { onTaskFormSubmit, categories }) {
  const [formData, setFormData] = useState({
    text: "",
    category: "Code"
  })
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [name]: value
    })
  }
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onTaskFormSubmit(formData)
    }} className="new-task-form">
      <label>
        Details
        <input onChange={handleChange} value={formData.text} type="text" name="text" />
      </label>
      <label>
        Category
        <select onChange={handleChange} value={formData.category} name="category">
          {categories.map(category => {
            if (category !== "All") {
              return <option key={category}>{category}</option>
            } else {
              return null;
            }
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
