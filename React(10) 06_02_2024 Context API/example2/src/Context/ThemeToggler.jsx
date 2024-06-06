// ThemeToggler.jsx
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext.jsx";

const ThemeToggler = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return <button onClick={toggleTheme}>Toggle Theme</button>;
};

export default ThemeToggler;
