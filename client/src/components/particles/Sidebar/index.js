import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav class="nav flex-column">
      <Link to="/appointment" class="nav-link active" aria-current="page">
        Appointment
      </Link>
      <Link to="/" class="nav-link">
        Link
      </Link>
      <Link to="/" class="nav-link">
        Link
      </Link>
      <Link to="/" class="nav-link disabled" tabindex="-1" aria-disabled="true">
        Disabled
      </Link>
    </nav>
  );
};

export default Sidebar;
