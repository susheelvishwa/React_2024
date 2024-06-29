import { useState } from "react";

function AddTodo({ handleAdd }) {
  const [text, setText] = useState("");

  const handleClick = () => {
    const taskObject = {
      id: Math.random() + text + Date.now(),
      title: text,
      status: false,
    };
    handleAdd(taskObject);
    setText("");
  };

  return (
    <>
      <label>
        ADD TODO :
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={handleClick}>ADD</button>
      </label>
    </>
  );
}

export default AddTodo;
