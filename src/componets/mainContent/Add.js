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
      tag: "",
      tags: []
    };
  }
  /* events - update local state*/
  handleTitleChange = e => {
    const title = e.target.value;
    if (title.length <= 20) {
      this.setState({
        title
      });
    } else {
      this.setState({ title: title.slice(0, 20) });
    }
  };
  handleContentChange = e => {
    const content = e.target.value;
    if (content.length <= 200) {
      this.setState({
        content
      });
    } else {
      this.setState({ content: content.slice(0, 200) });
    }
  };
  handleTagChange = e => {
    const tag = e.target.value;
    if (tag.length <= 12) {
      this.setState({
        tag
      });
    } else {
      this.setState({ tag: tag.slice(0, 12) });
    }
  };
  handleAddTag = e => {
    this.setState((prevState, props) => {
      if (prevState.tag) {
        return {
          tag: "",
          tags: [...prevState.tags, prevState.tag]
        };
      }
    });
  };
  handleRemoveTag = i => {
    this.setState((prevState, props) => ({
      tags: prevState.tags.filter((tag, index) => {
        return i !== index;
      })
    }));
  };

  /* dispatch */
  handleSubmit = e => {
    const { title, content } = this.state;
    if (title.length > 0 && content.length > 0) {
      this.props.addTodo(this.state);
      this.setState({
        title: "",
        content: "",
        tag: "",
        tags: []
      });
      // console.log(this.state);
    }
  };

  render() {
    const { tags } = this.state;
    const noTags = this.state.tags.length === 0;
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
          <h3>Tages</h3>
          <input
            type="text"
            onChange={this.handleTagChange}
            value={this.state.tag}
          />
          <AddTag handler={this.handleAddTag} />
          <div className={noTags ? "noTags" : ""}>
            {noTags ? (
              <span>{`[ None tags ]`}</span>
            ) : (
              tags.map((t, i) => (
                <Tag
                  name={t}
                  key={i}
                  handler={() => {
                    this.handleRemoveTag(i);
                  }}
                />
              ))
            )}
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
