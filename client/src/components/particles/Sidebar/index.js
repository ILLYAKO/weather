import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="nav flex-column">
      <Link to="/appointment" className="nav-link active" aria-current="page">
        Appointment
      </Link>
      <Link to="/calendar" className="nav-link">
        Calendar
      </Link>
      <Link to="/" className="nav-link">
        Link
      </Link>
      <Link to="/" className="nav-link disabled" tabIndex="-1" aria-disabled="true">
        Disabled
      </Link>
    </nav>
  );
};

export default Sidebar;
