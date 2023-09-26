import { Outlet } from "react-router-dom";

export default function CareersLayout() {
  return (
    <div className="careers-layout">
      <h2>Careers</h2>
      <p>These are the current openings on Our platform </p>

      <Outlet />
    </div>
  );
}
