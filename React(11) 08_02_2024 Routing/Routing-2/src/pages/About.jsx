// src/pages/About.jsx
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log(`button clicked and user is being navigated to contact page`);
    navigate(`/contact`);
  };

  return (
    <>
      <h1>About Page</h1>
      <button onClick={handleClick}>
        Navigate to contact page using useNavigate hook
      </button>
    </>
  );
}

export default About;