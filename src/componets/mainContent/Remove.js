import React, { Component } from "react";

export class Remove extends Component {
  render() {
    return (
      <div
        onClick={this.props.handler}
        className="Remove"
        dangerouslySetInnerHTML={{
          __html: "<span>&minus;</span>"
        }}
      />
    );
  }
}

export default Remove;
