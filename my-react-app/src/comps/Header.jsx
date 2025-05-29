import { NavLink } from "react-router-dom";
import React, { useState } from "react";

function Header() {
  const headerTitle = "MICHAEL DEMING";
  const navOption1 = "ABOUT";
  const navOption2 = "BLOG";
  const navOption3 = "PROJECTS";
  const navOption4 = "COMMUNITY";

  return (
    <div className="header">
      <NavLink to="/" style={{ color: "black", textDecoration: "none" }}>
        <h1 className="header-title">{headerTitle}</h1>
      </NavLink>

      <nav className="header-nav">
        <ul>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `header-page ${isActive ? "active" : ""}`
              }
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `header-page ${isActive ? "active" : ""}`
              }
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              name="blog"
              to="/blog"
              className={({ isActive }) =>
                `header-page ${isActive ? "active" : ""}`
              }
            >
              BLOG
            </NavLink>
          </li>
          <li>
            <NavLink
              name="projects"
              to="/projects"
              className={({ isActive }) =>
                `header-page ${isActive ? "active" : ""}`
              }
            >
              PROJECTS
            </NavLink>
          </li>
          <li>
            <NavLink
              name="community"
              to="/community"
              className={({ isActive }) =>
                `header-page ${isActive ? "active" : ""}`
              }
            >
              COMMUNITY
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
