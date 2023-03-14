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
              <img
                src='https://blogger.googleusercontent.com/img/a/AVvXsEgjA6FdqLFps5zaTKQjQJaEThc8nqqk-qq8BTrxjoc1a2DWIJ2wb-eTf1R4hYRwC4UDqdR2kOish2vKcemBjYQEh0waLfZ4wcteJvy0TISrdbPWZm8udx730Ow7nj-oU_-7ZJGQSWWU8iAa_FG3BZ02BK1gpXYzmxj-s42fk4D0WrooBR6bypV9ImrSOg=s800'
                alt=''
              />
            </span>

            <div class='text logo-text'>
              <span class='name'>MailFlow</span>
            </div>
          </div>
        </header>

        <div class='menu-bar'>
          <div class='menu'>
            <li class='search-box'>
              <i class='bx bx-search icon'></i>
              <input type='text' placeholder='Search...' />
            </li>

            <ul class='menu-links'>
              <li class='nav-link'>
                <a href='#'>
                  <Link to='/'>
                    <i class='bx bx-home-alt icon'></i>

                    <span class='text nav-text'>Dashboard</span>
                  </Link>
                </a>
              </li>

              <li class='nav-link'>
                <a href='#'>
                  <Link to='/users'>
                    <i class='bx bx-bar-chart-alt-2 icon'></i>
                    <span class='text nav-text'>Users</span>
                  </Link>
                </a>
              </li>

              <li class='nav-link'>
                <a href='#'>
                  <Link to='/addcourse'>
                    <i class='bx bx-bell icon'></i>
                    <span class='text nav-text'>Add Course</span>
                  </Link>
                </a>
              </li>

              <li class='nav-link'>
                <a href='#'>
                  <Link to='/courses'>
                    <i class='bx bx-bell icon'></i>
                    <span class='text nav-text'>Courses</span>
                  </Link>
                </a>
              </li>

              <li class='nav-link'>
                <a href='#'>
                  <Link to='/messages'>
                    <i class='bx bx-pie-chart-alt icon'></i>
                    <span class='text nav-text'>Messages</span>
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
