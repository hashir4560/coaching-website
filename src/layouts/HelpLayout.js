import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
  return (
    <div className="help-layout ">
      <h2>Website Help</h2>
      <p>
        Welcome to <strong color="orange">QLA website.</strong> .We are
        dedicated to helping you find your career and teachingb guide by
        providing a user-friendly platform that connects you with exciting
        teachers.
      </p>
      <nav>
        <NavLink to="faq">View the faq</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
