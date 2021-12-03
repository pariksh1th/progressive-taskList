import React from "react";

function Header() {
  function click() {
    alert("gotclicked");
  }
  return (
    <div className="heading">
      <h1>
        <i class="fas fa-check fa-1x" id="logo"></i>Task List
      </h1>
      <span className="grey-bt" onClick={click}>
        <i class="fas fa-plus"></i> Add a Task
      </span>
      <hr />
    </div>
  );
}

export default Header;
