import React, { Component } from "react";
import { connect } from "react-redux";

import Todo from "./Todo";
import Checkbox from "./Checkbox";

/* Unfinished list */

/* --- props --- */
// unfinished: array of todos from store
// quantity: number of todos in one page
// page: number of current page
// total: total number of unfinished todos
// handler: pass total to parent
/* --- props --- */

export class UfList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  /* every time total changed, send total to parent */
  static getDerivedStateFromProps(nextProps, prevState) {
    nextProps.handler(nextProps.total);
    return null;
  }
  render() {
    const list = this.props.unfinished.map((todo, index) => {
      return (
        <div key={index}>
          <Todo title={todo.title} tags={todo.tags} content={todo.content} />
          <Checkbox />
        </div>
      );
    });
    return (
      <div className="UfList clearfix">
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
const getUnfinished = (state, quantity, page) => {
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
  unfinished: getUnfinished(state.unfinished, ownProps.quantity, ownProps.page),
  total: state.unfinished.length
});
export default connect(
  mapStateToProps,
  null
)(UfList);
