import React, { Component } from "react";
import Avatar from "./Avatar";
import { Link } from "react-router-dom";

export class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar">
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
