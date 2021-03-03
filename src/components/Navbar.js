import React from "react";

const navbar = () => {
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar"
    >
      <div className="sidebar-sticky pt-3">

        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1">
          <span>All</span>
          <a
            className="d-flex align-items-center"
            href="#"
          >
          </a>
        </h6>
        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Templates</span>
        </h6>
        <ul className="nav flex-column mb-2">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Social Innovation
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default navbar;
