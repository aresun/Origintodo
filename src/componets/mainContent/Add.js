import React, { Component } from "react";
import Tag from "./Tag";

export class Add extends Component {
  render() {
    return (
      <div className="Add">
        <div>
          <h3>Todo Title</h3>
          <input type="text" />
        </div>
        <div>
          <h3>Todo Content</h3>
          <textarea />
        </div>
        <div>
          <h3>Tages: </h3>
          <div>
            <Tag name="job" />
            <Tag name="some" />
            <Tag name="movie" />
          </div>
        </div>
        <div className="buttons">
          <input type="button" value="Submit" />
          <input type="button" value="Reset" />
        </div>
      </div>
    );
  }
}

export default Add;
