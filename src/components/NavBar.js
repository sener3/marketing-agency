import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand text-blue-uppercase" href="/">
          marketing agency
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <Link class="text-blue" to="/marketing-agency">
                home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="text-blue" to="/marketing-agency/about">
                about us
              </Link>
            </li>
            <li class="nav-item">
              <Link class="text-blue" to="/marketing-agency/contact">
                contact us
              </Link>
            </li>
            <li class="nav-item">
              <Link class="text-blue" to="/marketing-agency/team">
                team
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
