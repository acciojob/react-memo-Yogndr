import React, { useState, useMemo } from "react";

const UseMemoComponent = () => {
  const [todos, setTodos] = useState(["Learn React", "Learn Hooks"]);
  const [count, setCount] = useState(0);

  // Expensive calculation (memoized)
  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {} // dummy calc
    return num * 2;
  };

  const memoizedValue = useMemo(() => expensiveCalculation(count), [count]);

  const addTodo = () => {
    setTodos((prev) => [...prev, "New todo"]);
  };

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div style={{ margin: "40px auto", width: "300px", border: "1px solid gray", padding: "20px", borderRadius: "10px" }}>
      <h2>useMemo Example</h2>

      <button onClick={addTodo}>Add todo</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>

      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <p>Expensive Calculation Result: {memoizedValue}</p>
      </div>
    </div>
  );
};

export default UseMemoComponent;
