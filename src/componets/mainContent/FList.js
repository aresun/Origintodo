import React, { Component } from "react";
import Todo from "./Todo";
import Remove from "./Remove";

import { connect } from "react-redux";
import { removeFromF } from "../../redux/actions/finished";
import { addTrash } from "../../redux/actions/trash";

export class FList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  /* every time total changed, send total to parent */
  static getDerivedStateFromProps(nextProps, prevState) {
    nextProps.handler(nextProps.total);
    return null;
  }
  removeF = (i, todo) => {
    // remove finished to trash
    // * finished
    this.props.dispatchRemoveFinished(i, todo);
  };
  render() {
    const list = this.props.finished.map((todo, index) => {
      return (
        <div key={index} className="clearfix">
          <Remove
            handler={e => {
              this.removeF(index, todo);
            }}
          />
          <Todo title={todo.title} tags={todo.tags} content={todo.content} />
        </div>
      );
    });
    return (
      <div className="FList clearfix">
        {list.length > 0 ? list : <span className="info">No Todos</span>}
      </div>
    );
  }
}
/**
 * @param { unfinished as array } state
 * @param { max number of a page } quantity
 * @param { page number } page
 */
const getFinished = (state, quantity, page) => {
  const len = state.length;
  // not enough as a page
  if (len <= quantity) {
    return state;
  } else {
    // more than a page
    /* as index, start from 0 */
    const start = quantity * (page - 1);
    // not inclue index at (end)
    let end = start + quantity;
    if (end <= len) {
      // len as index point to last item + 1
      return state.slice(start, end);
    } else {
      return state.slice(start);
    }
  }
};
const mapStateToProps = (state, ownProps) => ({
  finished: getFinished(state.finished, ownProps.quantity, ownProps.page),
  total: state.finished.length
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  dispatchRemoveFinished: (index, todo) => {
    dispatch(removeFromF(index));
    dispatch(addTrash(todo));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FList);
