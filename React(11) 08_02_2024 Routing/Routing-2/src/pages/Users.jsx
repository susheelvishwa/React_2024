// src/pages/Users.jsx
import { useState, useEffect } from "react";
import LoadingIndicator from "../components/LoadingIndicator";
import ErrorIndicator from "../components/ErrorIndicator";
import { Link } from "react-router-dom";

async function getData(url) {
  try {
    let response = await fetch(url);
    let finalResponse = await response.json();
    return finalResponse;
  } catch (error) {
    console.log(error);
  }
}

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function fetchAndUpdateData(url) {
    setLoading(true);
    try {
      const apiResponse = await getData(url);
      setUsers(apiResponse.data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAndUpdateData(`https://reqres.in/api/users`);
  }, []);

  if (loading) return <LoadingIndicator />;
  if (error) return <ErrorIndicator />;

  return (
    <div>
      <h1>Users Page</h1>
      {/* Users listing here */}
      {users &&
        users.length > 0 &&
        users.map((user) => (
          <div className="user-card" key={user?.id}>
            <img src={user?.avatar} alt={user?.first_name} />
            <Link to={`/users/${user?.id}`}>
              <button>Know more about user </button>
            </Link>
          </div>
        ))}
    </div>
  );
}

export default Users;
