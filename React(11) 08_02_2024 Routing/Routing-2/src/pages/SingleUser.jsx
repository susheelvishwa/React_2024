// src/pages/SingleUser.jsx
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingIndicator from "../components/LoadingIndicator";
import ErrorIndicator from "../components/ErrorIndicator";

async function getData(url) {
  try {
    let response = await fetch(url);
    let finalResponse = await response.json();
    return finalResponse;
  } catch (error) {
    console.log(error);
  }
}

function SingleUser() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { user_id } = useParams();

  async function fetchAndUpdateData(url) {
    setLoading(true);
    try {
      const apiResponse = await getData(url);
      console.log(apiResponse);
      setUser(apiResponse.data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAndUpdateData(`https://reqres.in/api/users/${user_id}`);
  }, [user_id]);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <>
      <h1>Single User Page</h1>
      {user && (
        <div style={{ margin: "25px", border: "1px solid black" }}>
          <img src={user?.avatar} alt={user?.first_name} />
          <h5>
            Name : {user?.first_name}
            {user?.last_name}
          </h5>
          <h5>Email : {user?.email}</h5>
        </div>
      )}
    </>
  );
}

export default SingleUser;
