import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Progress from "react-progress-2";
import "react-progress-2/main.css";

class MiniNav extends Component {
  render() {
    return (
      <div className="bg-white p-2">
        {/* <span className='mr-2'><NavLink exact to='/' className='nav-link d-inline text-dark' onClick={this.clicker}>Just you</NavLink></span> */}
        <span className="mr-2">
          <NavLink
            to="/trending_p"
            className="nav-link d-inline text-dark"
            onClick={this.clicker}
          >
            Phone
          </NavLink>
        </span>
        {/* <span className="mr-2">
          <NavLink
            to="/trending_l"
            className="nav-link d-inline text-dark"
            onClick={this.clicker}
          >
            Laptops
          </NavLink>
        </span> */}
        <span className="mr-2">
          <NavLink
            to="/trending_g"
            className="nav-link d-inline text-dark"
            onClick={this.clicker}
          >
            Gaming
          </NavLink>
        </span>
      </div>
    );
  }
  clicker() {
    Progress.show();
  }
}
export default MiniNav;