import React, { useState } from "react";

const SkillList = React.memo(({ skills }) => {
  console.log("SkillList rendered");
  return (
    <ul>
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  );
});

const ReactMemoComponent = () => {
  const [skills, setSkills] = useState(["HTML", "CSS"]);
  const [input, setInput] = useState("");

  const addSkill = () => {
    if (input.trim().length > 5) {
      setSkills((prev) => [...prev, input]);
      setInput("");
    } else {
      alert("Task must be more than 5 characters!");
    }
  };

  return (
    <div style={{ margin: "40px auto", width: "300px", border: "1px solid gray", padding: "20px", borderRadius: "10px" }}>
      <h2>React.memo Example</h2>

      <input
        type="text"
        placeholder="Enter new skill"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addSkill}>Add Skill</button>

      <SkillList skills={skills} />
    </div>
  );
};

export default ReactMemoComponent;
