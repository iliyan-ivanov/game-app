import { Link, useNavigate } from "react-router-dom";
import logo from "/controller.png";
import "./Header.css";
import AuthContext from "../../../contexts/AuthContext";
import { useContext } from "react";
import { logout } from "../../../services/UserService";

const Header = () => {
  const navigate = useNavigate();
  const user = useContext(AuthContext);

  const onLogoutClick = (e) => {
    e.preventDefault();
    logout();
    navigate("/");
  };

  return (
    <header>
      <nav className="top-nav">
        <section>
          <h2 className="top-nav-header">
            <Link to="/">Game Site</Link>
          </h2>
        </section>
        <section className="nav-icon-section">
          <Link to="/categories/All" className="nav-icon">
            <img src={logo} alt="Controller" />
          </Link>
          <Link to="/profile">
            <h3>{user?.email}</h3>
          </Link>
        </section>
        <section className="top-nav-auth-section">
          {user ? (
            <ul className="top-nav-list">
              <li className="top-nav-list-item">
                <Link to="/create-game">Create</Link>
              </li>
              <li className="top-nav-list-item" onClick={onLogoutClick}>
                <Link to="/logout">Logout</Link>
              </li>
            </ul>
          ) : (
            <ul className="top-nav-list">
              <li className="top-nav-list-item">
                <Link to="/login">Login</Link>
              </li>
              <li className="top-nav-list-item">
                <Link to="/register">Register</Link>
              </li>
            </ul>
          )}
        </section>
      </nav>
    </header>
  );
};

export default Header;
