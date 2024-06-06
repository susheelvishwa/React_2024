// App.jsx
import { useContext } from "react";
import { ThemeContext } from "./Context/ThemeContext.jsx";
import ThemeToggler from "./Context/ThemeToggler.jsx";

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        height: "100vh",
      }}
    >
      <h1>The current theme is {theme}</h1>
      <ThemeToggler />
    </div>
  );
};

export default App;
