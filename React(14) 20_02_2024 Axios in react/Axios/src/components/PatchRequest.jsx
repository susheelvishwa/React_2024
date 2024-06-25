import axios from "axios";
import { useState } from "react";

const PostRequest = ({ getData }) => {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [company, setCompany] = useState("");

  const handlePost = async () => {
    await axios.put("http://localhost:3000/employees", {
      name,
      department,
      company,
    });
    getData();
    setCompany("");
    setDepartment("");
    setName("");
  };

  return (
    <div>
      <label htmlFor="">Name : </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <label htmlFor="">Department : </label>
      <input
        type="text"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      />
      <br />
      <br />
      <label htmlFor="">Company : </label>
      <input
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handlePost}>Add post</button>
    </div>
  );
};

export default PostRequest;
