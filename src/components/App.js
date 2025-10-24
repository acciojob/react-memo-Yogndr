import React, { useState, useEffect } from "react";
import UseMemoComp from "./UseMemo";
import ReactMemoComp from "./ReactMemo";

const App = () => {
  const [todos, setTodos] = useState(["New Todo"]);
  const [count, setCount] = useState(0);

  // useEffect: Runs whenever todos or count change
  useEffect(() => {
    console.log("Updated State:", { todos, count });
  }, [todos, count]);

  // Add new todo
  const addTodo = () => {
    setTodos((prev) => [...prev, "New Todo"]);
  };

  // Increment counter
  const increment = () => setCount((prev) => prev + 1);

  return (
    <div style={{ width: "60%", margin: "auto", marginTop: "40px" }}>
      <h2>React.useMemo</h2>

      <UseMemoComp todos={todos} addTodo={addTodo} count={count} increment={increment} />

      <hr style={{ margin: "30px 0" }} />

      <ReactMemoComp />
    </div>
  );
};

export default App;
