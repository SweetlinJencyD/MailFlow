import React from "react";

import "./navbar.css";

function Navbar() {
  return (
    <div class='top-nav'>
      <div class='user-profile'>
        <img src='https://placehold.it/40x40' alt='User profile picture' />
        <div class='user-dropdown'>
          <a href='#'>Profile</a>
          <a href='#'>Logout</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
