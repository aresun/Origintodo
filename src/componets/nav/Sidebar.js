import React, { Component } from "react";
import Avatar from "./Avatar";
import { Link } from "react-router-dom";

export class Sidebar extends Component {
  setActiveClass = e => {
    const target = e.target;
    if (target.nodeName === "A") {
      const siblings = target.parentNode.getElementsByTagName("A");
      for (let i = 0; i !== siblings.length; i++) {
        if (siblings[i] !== target) {
          // remove all siblings' class
          siblings[i].setAttribute("class", "");
        } else {
          target.setAttribute("class", "activeLink");
        }
      }
    }
  };
  render() {
    return (
      <div className="Sidebar" onClick={this.setActiveClass}>
        <Avatar />
        <Link to="/">Home</Link>
        <Link to="/add">Add</Link>
        <Link to="/unfinished">Unfinished</Link>
        <Link to="/finished">Finished</Link>
        <Link to="/trash">Trash</Link>
      </div>
    );
  }
}

export default Sidebar;
