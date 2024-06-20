// src/components/AllRoutes.jsx
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Users from "../pages/Users";
import SingleUser from "../pages/SingleUser";
import Notfound from "../pages/Notfound";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/:user_id" element={<SingleUser />} />
      <Route path="/*" element={<Notfound/>} />

      {/* Whenever react routes see a route with /users/anything --> it'd go to this route; */}
    </Routes>
  );
}

export default AllRoutes;
