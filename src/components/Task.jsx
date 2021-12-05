import React from "react";

function Task(props) {
  function forwordHandel() {
    if (props.tagName === "To do") {
      props.pushFunction(props.title, props.doingList);
      props.popFunction(props.id, props.listName);
    } else if (props.tagName === "Doing") {
      props.pushFunction(props.title, props.doneList);
      props.popFunction(props.id, props.listName);
      // alert("clicked");
    }
  }

  function backwordHandel() {
    if (props.tagName === "Doing") {
      props.pushFunction(props.title, props.todoList);
      props.popFunction(props.id, props.listName);
    } else if (props.tagName === " Done") {
      props.pushFunction(props.title, props.doingList);
      props.popFunction(props.id, props.listName);
      // alert("clicked");
    }
  }

  return (
    <div className="task">
      {props.tagName !== "To do" && (
        <i
          onClick={backwordHandel}
          id="backword-bt"
          class="fas fa-chevron-left"
        ></i>
      )}

      <span className="h4">{props.title}</span>
      <i
        onClick={() => {
          props.popFunction(props.id, props.listName);
        }}
        id="delete-bt"
        class="fas fa-trash"
      ></i>
      {props.tagName !== " Done" && (
        <i
          onClick={forwordHandel}
          id="forword-bt"
          class="fas fa-chevron-right"
        ></i>
      )}
    </div>
  );
}

export default Task;
