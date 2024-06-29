function TodoItem({ id, title, status, handleDelete, handleToggle }) {
  return (
    <div style={{ border: "1px solid black", margin: "10px" }}>
      <p>{title}</p>
      <p>STATUS : {status ? "DONE" : "NOT DONE"}</p>
      <button onClick={() => handleToggle(id)}>TOGGLE</button>
      <button onClick={() => handleDelete(id)}>DELETE</button>
    </div>
  );
}

export default TodoItem;