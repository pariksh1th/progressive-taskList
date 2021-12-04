import React, { useState } from "react";
import Task from "./Task";
import Form from "./Form";

function List(props) {
  const [showForm, setShowForm] = useState(false);

  function addButton() {
    setShowForm((perv) => !perv);
  }

  const list = props.list;
  return (
    <>
      <div className="lists">
        <span className="status-tag" style={{ backgroundColor: props.color }}>
          {props.statusTag === " Done" && <i class="fas fa-hands-wash"></i>}
          {props.statusTag}
        </span>
        <span className="no-tasks">{props.lenght}</span>
        <i onClick={addButton} class="fas fa-plus" id="plus-bt"></i>
        {showForm && <Form />}
        {list.map((data, index) => (
          <Task title={data.title} content={data.content} key={index} />
        ))}
      </div>
    </>
  );
}

export default List;
