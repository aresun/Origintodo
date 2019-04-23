import React, { Component } from "react";

import { connect } from "react-redux";
import {
  removeFromUnf,
  finishTodoByIndex
} from "../../redux/actions/unfinished";
import { addFinished } from "../../redux/actions/finished";
import { addTrash } from "../../redux/actions/trash";
import Todo from "./Todo";
import Checkbox from "./Checkbox";
import Remove from "./Remove";

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
  removeUftodo = (i, todo) => {
    // * unfinished
    // * to trash
    this.props.dispatchRemoveUnfinished(i, todo);
  };
  finishTodo = (i, todo) => {
    // i for unf, todo for add
    this.props.dispatchFinishTodo(i, todo);
  };
  render() {
    const list = this.props.unfinished.map((todo, index) => {
      return (
        <div key={index} className="clearfix">
          <Remove
            handler={e => {
              this.removeUftodo(index, todo);
            }}
          />
          <Todo title={todo.title} tags={todo.tags} content={todo.content} />
          <Checkbox
            handler={e => {
              this.finishTodo(index, todo);
            }}
          />
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
const mapDispatchToProps = (dispatch, ownProps) => ({
  dispatchRemoveUnfinished: (index, todo) => {
    dispatch(removeFromUnf(index));
    dispatch(addTrash(todo));
  },
  dispatchFinishTodo: (index, todo) => {
    dispatch(finishTodoByIndex(index));
    dispatch(addFinished(todo));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UfList);
