import React from "react";

function Header(props) {
  return (
    <div className="heading">
      <h1>
        <i class="fas fa-check fa-1x" id="logo"></i>Task List
      </h1>
      <span
        className="grey-bt"
        onClick={() => {
          props.clickFunction();
        }}
      >
        <i class="fas fa-plus"></i> Add a Task
      </span>
      <hr />
    </div>
  );
}

export default Header;
