import "../App.css";

const Post = ({ name, department, company }) => {
  return (
    <div className="card">
      <h2 className="name">name: {name} </h2>
      <h2 className="department">department: {department} </h2>
      <h2 className="company">company: {company} </h2>
    </div>
  );
};

export default Post;
