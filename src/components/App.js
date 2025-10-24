import React from "react";
import UseMemoComponent from "./UseMemo";
import ReactMemoComponent from "./ReactMemo";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Memo Output</h1>
      <UseMemoComponent />
      <ReactMemoComponent />
    </div>
  );
}

export default App;
