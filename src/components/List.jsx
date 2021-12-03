import React, { useState } from "react";
import Task from "./Task";

function List(props) {
  const [listItem, setListItem] = useState({
    title: "",
    content: "",
  });

  const list = props.list;
  return (
    <>
      <div className="lists">
        <span className="status-tag">To Do</span>
        <span className="no-tasks"> 5</span>
        <i class="fas fa-plus" id="plus-bt"></i>
        {list.map((data, index) => (
          <Task title={data.title} content={data.content} key={index} />
        ))}
      </div>
    </>
  );
}

export default List;
