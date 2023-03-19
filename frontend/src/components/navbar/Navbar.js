import React from "react";

import "./navbar.css";

function Navbar() {
  return (
    <div class='top-nav'>
      <div class='user-profile'>
        <img src={require("../../assests/user.png")} alt='User profile' />
        <div class='user-dropdown'>
          <a href='#'>Profile</a>
          <a href='#'>Logout</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
