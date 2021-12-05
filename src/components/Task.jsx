import React from "react";

function Task(props) {
  return (
    <div className="task">
      <span className="h4">{props.title}</span>
      <i
        onClick={() => {
          props.popFunction(props.id, props.listName);
        }}
        id="delete-bt"
        class="fas fa-trash"
      ></i>
    </div>
  );
}

export default Task;
