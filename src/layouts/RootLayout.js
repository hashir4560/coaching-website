import { NavLink, Outlet } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs";
import logo from "../assets/logo.png";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>
            <span style={{ color: "#FFA500" }}>Quantum</span>{" "}
            <span style={{ color: "#ffff" }}>Learning</span>{" "}
            <span style={{ color: "#FFA500" }}>Academy</span>
          </h1>
          <img
            src={logo}
            alt="QLA logo"
            style={{
              width: "100px", // Adjust the width as needed
              height: "auto", // Maintain aspect ratio
              position: "absolute",
              top: "20px",
              left: "20px",
              zIndex: 1,
              backgroundColor: "transparent",
            }}
          />
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="help">Help</NavLink>
          <NavLink to="careers">Careers</NavLink>
        </nav>

        <BreadCrumbs />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
