import React from "react";

function CategoryFilter({ categories, filterTask }) {
  const selectCategory = (e) => {
    const btns = document.querySelectorAll(".categories button");
    btns.forEach(btn => {
      if (btn.textContent === e.target.textContent) {
        btn.classList.add("selected");
      } else {
        btn.classList.remove("selected");
      }
    })
    filterTask(e.target.textContent);
  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category, idx) => {
        return <button id={category} name={category} onClick={selectCategory} key={category}>{category}</button>
      })}
    </div>
  );
}

export default CategoryFilter;
