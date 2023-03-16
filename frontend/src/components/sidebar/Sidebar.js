import React from "react";
import { Link } from "react-router-dom";
import "../../styles/dashboard.css";

function Sidebar() {
  return (
    <>
      <input id='menu__toggle' type='checkbox' />
      <label class='menu__btn' for='menu__toggle'>
        <span></span>
      </label>
      <nav class='sidebar'>
        <header>
          <div class='image-text'>
            <span class='image'>
              <img src={require("../../assests/logo.png")} alt='' />
            </span>

            <div class='text logo-text'>
              <span class='name'>MailFlow</span>
            </div>
          </div>
        </header>

        <div class='menu-bar'>
          <div class='menu'>
            <ul class='menu-links'>
              <li class='nav-link'>
                {/* <a href='#'> */}
                <Link to='/'>
                  <i class='fa-sharp fa-solid fa-gauge-high icon'></i>
                  <span class='text nav-text'>Dashboard</span>
                </Link>
                {/* </a> */}
              </li>

              <li class='nav-link'>
                <a href='#'>
                  <Link to='/mailer'>
                    {/* <i class='bx bx-bar-chart-alt-2 icon'></i> */}
                    <i class='fa-sharp fa-solid fa-envelopes-bulk icon'></i>
                    <span class='text nav-text'>Mailer</span>
                  </Link>
                </a>
              </li>

              <li class='nav-link'>
                <a href='#'>
                  <Link to='/groups'>
                    <i class='fa-sharp fa-solid fa-user-group icon'></i>
                    <span class='text nav-text'>Groups</span>
                  </Link>
                </a>
              </li>

              {/* <li class='nav-link'>
                <a href='#'>
                  <i class='bx bx-wallet icon'></i>
                  <span class='text nav-text'>Wallets</span>
                </a>
              </li> */}
            </ul>
          </div>

          <div class='bottom-content'>
            {/* <li class=''>
              <a href='#'>
                <i class='bx bx-log-out icon'></i>
                <span class='text nav-text'>Logout</span>
              </a>
            </li> */}

            {/* <li class='mode'>
              <div class='sun-moon'>
                <i class='bx bx-moon icon moon'></i>
                <i class='bx bx-sun icon sun'></i>
              </div>
              <span class='mode-text text'>Dark mode</span>

              <div class='toggle-switch'>
                <span class='switch'></span>
              </div>
            </li> */}
          </div>
        </div>
      </nav>
    </>
    // </div>
  );
}

export default Sidebar;
