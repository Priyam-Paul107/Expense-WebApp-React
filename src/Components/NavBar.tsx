import { FaBarsProgress } from "react-icons/fa6";
import {NavLink} from "react-router-dom";
import Logo from "./Logo";
const NavBar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg mt-3 rounded-4 ">
        <div className="collapse navbar-collapse  m-3" id="navbarNav">
                <Logo  />
          <ul className="navbar-nav">
            <li className="nav-item">
              
              <NavLink className="nav-link" to="/">
                DashBoard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/new">
                New Expense
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/report">
                Reports
              </NavLink>
            </li>
          </ul>
        </div>

        <nav className="navbar">
          <div className="container">
            <div className="d-flex " role="search"></div>
            <NavLink className="btn btn-sm btn-outline-light " to="/login">Login</NavLink>
            <NavLink className="btn btn-sm btn-outline-light mx-1" to="/register">
              Register
            </NavLink>
            <button
              className="navbar-toggler m-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <FaBarsProgress color="white"/>
            </button>
          </div>
        </nav>
      </nav>
    </div>
  );
};

export default NavBar;
