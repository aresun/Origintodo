import React, { Component } from "react";

import Tag from "./Tag";
import AddTag from "./AddTag";

import { connect } from "react-redux";
import addTodo from "../../redux/actions/addTodo";

export class Add extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      content: "",
      tags: []
    };
  }
  /* events */
  handleTitleChange = e => {
    this.setState({
      title: e.target.value
    });
  };
  handleContentChange = e => {
    this.setState({
      content: e.target.value
    });
  };

  /* dispatch */
  handleSubmit = e => {
    this.props.addTodo(this.state);
    // console.log(this.state);
  };

  render() {
    return (
      <div className="Add">
        <div>
          <h3>Todo Title</h3>
          <input
            type="text"
            onChange={this.handleTitleChange}
            value={this.state.title}
          />
        </div>
        <div>
          <h3>Todo Content</h3>
          <textarea
            onChange={this.handleContentChange}
            value={this.state.content}
          />
        </div>
        <div>
          <h3>Tages </h3>
          <AddTag />
          <div>
            <Tag name="job" />
            <Tag name="some" />
            <Tag name="movie" />
          </div>
        </div>
        <div className="buttons">
          <input type="button" onClick={this.handleSubmit} value="Submit" />
          <input type="button" value="Reset" />
        </div>
      </div>
    );
  }
}

const mapDispachToProps = dispach => ({
  addTodo: todo => {
    dispach(addTodo(todo));
  }
});
export default connect(
  null,
  mapDispachToProps
)(Add);
