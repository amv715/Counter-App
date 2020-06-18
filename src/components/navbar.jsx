import React from 'react';
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand">
        Active
        <span className="badge badge-pill badge-success m-2">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
