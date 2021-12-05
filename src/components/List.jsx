import React, { useState } from "react";
import Task from "./Task";
import Form from "./Form";

function List(props) {
  // <--------------------------------- plus button functionality -------------------------------------->
  const [showForm, setShowForm] = useState(false);

  function addButton() {
    setShowForm((perv) => !perv);
  }
  // <--------------------------------- ++++++++++++++++++++++++ -------------------------------------->

  const list = props.list;
  return (
    <>
      <div className={props.listClass}>
        <span className="status-tag" style={{ backgroundColor: props.color }}>
          {props.tagName === " Done" && <i class="fas fa-hands-wash"></i>}
          {props.tagName}
        </span>
        <span className="no-tasks">{props.lenght}</span>

        {/* hideing `+` button and showing form incase of "Add a task" button is clicked */}
        {!props.clickVlaue && (
          <i onClick={addButton} class="fas fa-plus" id="plus-bt"></i>
        )}
        {props.clickVlaue && (
          <Form pushFunction={props.pushFunction} listName={props.listName} />
        )}

        {/* showing form when `+` button is clicked */}
        {showForm && (
          <Form pushFunction={props.pushFunction} listName={props.listName} />
        )}

        {list.map((data, index) => (
          <Task
            title={data}
            key={index}
            id={index}
            popFunction={props.popFunction}
            listName={props.listName}
          />
        ))}
      </div>
    </>
  );
}

// export { addButton };
export default List;
