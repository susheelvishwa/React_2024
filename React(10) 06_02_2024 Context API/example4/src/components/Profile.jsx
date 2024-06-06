import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";

const Profile = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Profile</h2>
          <p>Name: John Doe</p>
          <p>Email: john.doe@example.com</p>
        </div>
      ) : (
        <p>Please log in to view your profile.</p>
      )}
    </div>
  );
};

export default Profile;
