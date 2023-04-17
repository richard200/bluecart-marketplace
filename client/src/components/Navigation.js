import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/search-results">
            Search Results
          </NavLink>
        </li>
        <li>
          <NavLink to="/user-account">
            User Account
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
