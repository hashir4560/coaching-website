import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
  return (
    <div className="help-layout ">
      <h2>Wesite Help</h2>
      <p>
        Welcome to our Job Search Website! We are dedicated to helping you find
        your dream job by providing a user-friendly platform that connects you
        with exciting career opportunities.
      </p>
      <nav>
        <NavLink to="faq">View the faq</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
