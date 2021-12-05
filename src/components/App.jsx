import React, { useState } from "react";
import Header from "./Header";
import List from "./List";

function App() {
  //<-------- List section ------------------------------>

  const [todo, setTodo] = useState(["complete task 1"]);
  const [doing, setDoing] = useState(["complete task 1"]);
  const [done, setDone] = useState([
    "complete task 1",
    "Tempor duis elit nulla laboris ea magna culpa deserunt anim.",
  ]);

  // add task to list
  function pushNote(data, listName) {
    listName((perv) => [data, ...perv]);
  }

  // delete task from list
  function popNote(id, listName) {
    listName((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  //<----- ++++++++++++++++++++++ ------------------------------>

  //<--- add a task button functionality ------------------------>
  const [addClick, setAddClick] = useState(false);

  function click() {
    setAddClick((perv) => !perv);
  }
  //<---- ++++++++++++++++++++++++ ------------------------------>

  return (
    <div>
      <Header clickFunction={click} />
      <List
        list={todo}
        pushFunction={pushNote}
        listName={setTodo}
        popFunction={popNote}
        tagName="To do"
        listClass="todoList"
        lenght={todo.length}
        color="#b91646"
        clickVlaue={addClick}
      />
      <List
        list={doing}
        pushFunction={pushNote}
        popFunction={popNote}
        listName={setDoing}
        tagName="Doing"
        color="#00A19D"
        listClass="doingList"
        lenght={doing.length}
      />
      <List
        list={done}
        popFunction={popNote}
        pushFunction={pushNote}
        listName={setDone}
        tagName=" Done"
        color="#B24080"
        listClass="doneList"
        lenght={done.length}
      />
    </div>
  );
}

export default App;
