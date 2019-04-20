import React, { Component } from "react";
import { connect } from "react-redux";

export class Unfinished extends Component {
  render() {
    return (
      <div className="Unfinished">
        {this.props.unfinished.map((todo, index) => {
          return (
            <div key={index}>
              <h3>{todo.title}</h3>
              <p>{todo.content}</p>
              <p>{todo.tags.join("@")}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  unfinished: state.unfinished
});
export default connect(
  mapStateToProps,
  null
)(Unfinished);
