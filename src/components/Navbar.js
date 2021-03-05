import React from "react";
import routes from "./routes";
import { Switch, Route, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="mobile-nav col-md-3 col-lg-2">
      <div className="pt-3 d-flex justify-content-center d-none d-sm-block d-md-none">
        <h6 className="sidebar-heading align-items-center px-1 mt-2 mb-1">
          <Link to="/">Home</Link>
        </h6>
        <div className="dropdown">
          <a
            className="btn-menu dropdown-toggle"
            href="/#"
            role="button"
            id="dropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Templates
          </a>

          <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <Link className="dropdown-item" to="/social">
              Social Innovation
            </Link>
            <Link className="dropdown-item" to="/social">
              Template 1
            </Link>
            <Link className="dropdown-item" to="/social">
              Template 2
            </Link>
          </div>
        </div>
      </div>

      <nav
        id="sidebarMenu"
        className="d-md-block bg-light sidebar collapse"
      >
        <div className="pt-3">
          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-1 mt-3 mb-1">
            <Link to="/">Home</Link>
          </h6>
          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-1 mt-3 mb-1 text-muted">
            <span>Templates</span>
          </h6>
          <ul className="nav flex-column mb-2 px-3 mt-3 mb-1">
            <li className="nav-item">
              <Link to="/social">Social Innovation</Link>
            </li>
          </ul>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.sidebar />}
              />
            ))}
          </Switch>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
