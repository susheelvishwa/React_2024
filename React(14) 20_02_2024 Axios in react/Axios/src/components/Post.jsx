import "../App.css";

const Post = ({ name, department, company }) => {
  return (
    <div className="card">
      <h2 className="name">Name: {name} </h2>
      <h2 className="department">Department: {department} </h2>
      <h2 className="company">Company: {company} </h2>
    </div>
  );
};

export default Post;
