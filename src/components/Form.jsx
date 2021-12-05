import React, { useState } from "react";

function Form(props) {
  const [note, setNote] = useState("");

  function handelChange(event) {
    const value = event.target.value;

    setNote(value);
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          placeholder="Add Task"
          value={note}
          onChange={handelChange}
          autoFocus="autofocus"
        />
        <span
          className="form-add"
          onClick={() => {
            props.pushFunction(note, props.listName);
            setNote("");
          }}
        >
          Add
        </span>
      </form>
    </div>
  );
}

export default Form;
