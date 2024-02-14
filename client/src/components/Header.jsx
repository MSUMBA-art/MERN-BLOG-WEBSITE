import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.jpg';

const Header = () => {
  return (
    <nav>
      <div className="container nav_container">
        <Link to="/" className="nav-_logo">
          <img src={Logo} alt="LOGO" />
        </Link>
        <ul className="nav_menu">
          <li>
            <Link to="/profile">AJ ONLINE</Link>
          </li>
          <li>
            <Link to="/create">Create Post</Link>
          </li>
          <li>
            <Link to="/authors">Authors</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
        <button className="nav_toggle-btn"></button>
      </div>
    </nav>
  );
};

export default Header;
