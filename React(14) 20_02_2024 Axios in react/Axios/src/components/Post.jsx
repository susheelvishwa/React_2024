import { useState } from "react";
import "../App.css";
import axios from "axios";

const Post = ({ name, department, company }) => {
  const [depart, setDepart] = useState("");

  const handleEdit = async () => {
    await axios.patch(`http://localhost:3000/employees/${id}`, {
      department: depart,
    });
  };

  return (
    <div className="card">
      <h2 className="name">Name: {name} </h2>
      <h2 className="department">Department: {department} </h2>
      <h2 className="company">Company: {company} </h2>
      <div>
        <input
          type="text"
          value={depart}
          onChange={(e) => setDepart(e.target.value)}
        />
        <button onClick={handleEdit}>Edit card</button>
      </div>
    </div>
  );
};

export default Post;
