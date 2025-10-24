import React, { useMemo } from "react";

const UseMemoComp = ({ todos, addTodo, count, increment }) => {
  // Expensive calculation, optimized using useMemo
  const expensiveCalculation = useMemo(() => {
    console.log("Running expensive calculation...");
    let total = 0;
    for (let i = 0; i < 100000000; i++) {
      total += 1;
    }
    return total;
  }, []);

  return (
    <div>
      <h3>My todos</h3>
      {todos.map((todo, idx) => (
        <div key={idx}>{todo}</div>
      ))}
      <button onClick={addTodo}>Add Todo</button>

      <div style={{ marginTop: "10px" }}>
        <h4>Count: {count}</h4>
        <button onClick={increment}>+</button>
      </div>

      <h3 style={{ marginTop: "20px" }}>Expensive Calculation</h3>
      <div>{expensiveCalculation}</div>
    </div>
  );
};

export default UseMemoComp;
