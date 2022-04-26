import React from "react";
import { Link } from "react-router-dom";

const Navabar1 = () => {
  return (
    <div className="navbarBlock">
      <ul>
        <li>
          <Link to="/">User</Link>
        </li>
        <li>
          <Link to="/create-user">Create users</Link>
        </li>
        <li></li>
      </ul>
    </div>
  );
};

export default Navabar1;
