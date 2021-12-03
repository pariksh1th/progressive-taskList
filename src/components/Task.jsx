import React from "react";

function Task(props) {
  return (
    <div className="task">
      <h4>{props.title}</h4>
      <span className="content">{props.content}</span>
    </div>
  );
}

export default Task;
