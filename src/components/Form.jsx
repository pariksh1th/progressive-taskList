import React from "react";

function Form() {
  return (
    <div>
      <form className="create-note">
        <input
          //   onChange={}
          //   value={}
          name="title"
          placeholder="Title"
          autoFocus="autofocus"
        />

        <textarea
          //   onChange={handleChange}
          //   value={note.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
      </form>
    </div>
  );
}

export default Form;
