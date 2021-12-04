import React, { useState } from "react";
import Header from "./Header";
import List from "./List";

function App() {
  const [todo, setTodo] = useState([
    {
      title: "oajk vapoij g",
      content:
        "Ullamco aute sunt sit aute et est non sint reprehenderit dolore sint exercitation nulla.",
    },
  ]);
  const [doing, setDoing] = useState([]);
  const [done, setDone] = useState([]);

  return (
    <div>
      <Header />
      <List
        list={todo}
        lenght={todo.length}
        statusTag="To Do"
        color="#b91646"
      />
      <List
        list={doing}
        statusTag="Doing"
        color="#00A19D"
        lenght={doing.length}
      />
      <List
        list={done}
        statusTag=" Done"
        color="#B24080"
        lenght={doing.length}
      />
    </div>
  );
}

export default App;
