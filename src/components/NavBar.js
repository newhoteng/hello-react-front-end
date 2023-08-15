import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default NavBar;