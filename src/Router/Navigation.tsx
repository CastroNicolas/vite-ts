import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import logo from "../assets/react.svg";
export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="logo React" />
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "nav-active" : "")}
                to="/home"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/users" className={({ isActive }) => (isActive ? "nav-active" : "")}> Users </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="home" element={<h1>Home Page</h1>} />
          <Route path="about" element={<h1>About Page</h1>} />
          <Route path="users" element={<h1>Users Page</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
