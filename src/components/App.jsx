import React, { useState } from "react";
import Header from "./Header";
import List from "./List";

function App() {
  const [todo, setTodo] = useState([
    {
      title: "todo title",
      content:
        "Magna ullamco excepteur Lorem est eu labore dolore non commodo dolor.",
    },
  ]);
  const [doing, setDoing] = useState([
    {
      title: "todo title",
      content:
        "Magna ullamco excepteur Lorem est eu labore dolore non commodo dolor.",
    },
  ]);
  const [done, setDone] = useState([
    {
      title: "todo title",
      content:
        "Magna ullamco excepteur Lorem est eu labore dolore non commodo dolor.",
    },
  ]);

  return (
    <div>
      <Header />
      <List list={todo} />
      <List list={doing} />
      <List list={done} />
    </div>
  );
}

export default App;
