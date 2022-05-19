import React, { useState } from "react";

import { Link } from "react-router-dom";

export default function Navbar() {
  const [user, setUser] = useState(
    JSON.parse(window.sessionStorage.getItem("user"))
  );

  return (
    <div className="navbar">
      <h1 className="siteName">
        <Link to="/" className="linkName">
          <li>Siremar</li>
        </Link>
      </h1>
      <ul>
        <Link to="/blog" className="linkName">
          <li>Blog</li>
        </Link>
        <Link to="/services" className="linkName">
          <li>Services</li>
        </Link>
        <Link to="/aboutus" className="linkName">
          <li>About Us</li>
        </Link>
        <Link to="/contact" className="linkName">
          <li>Contact</li>
        </Link>
        {!user && (
          <Link to="/login" className="linkName">
            <li>Login</li>
          </Link>
        )}
        {user && (
          <Link to="/dashboard" className="linkName">
            <li>{user.Name.toUpperCase()}</li>
          </Link>
        )}
        {user && (
          <Link
            to="/login"
            className="linkName"
            onClick={() => {
              window.sessionStorage.removeItem("user");
              window.location.href('/login')
            }}
          >
            <li>Sign Out</li>
          </Link>
        )}
      </ul>
    </div>
  );
}
