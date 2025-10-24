import React, { useState, useCallback } from "react";

// Skill list (memoized to avoid re-renders when props don't change)
const SkillList = React.memo(({ skills, handleAddSkill }) => {
  return (
    <div>
      <input
        id="skill-input"
        type="text"
        value={skills.input}
        onChange={(e) => skills.setInput(e.target.value)}
      />
      <button id="skill-add-btn" onClick={handleAddSkill}>
        Add Skill
      </button>
      <ul>
        {skills.list.map((skill, idx) => (
          <li key={idx}>{skill}</li>
        ))}
      </ul>
    </div>
  );
});

const ReactMemoComp = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState(["HTML", "CSS", "JavaScript", "React"]);

  // useCallback: prevents re-creation of handleAddSkill on each render
  const handleAddSkill = useCallback(() => {
    const trimmed = input.trim();
    if (trimmed && !list.includes(trimmed)) {
      setList((prev) => [...prev, trimmed]);
      setInput("");
    }
  }, [input, list]);

  return (
    <div>
      <h2>React.memo</h2>
      <SkillList skills={{ list, input, setInput }} handleAddSkill={handleAddSkill} />
    </div>
  );
};

export default ReactMemoComp;
