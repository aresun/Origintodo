import React, { Component } from "react";
import Todo from "./Todo";
import Remove from "./Remove";

import { connect } from "react-redux";
import { removeFromT } from "../../redux/actions/trash";

export class TList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  /* every time total changed, send total to parent */
  static getDerivedStateFromProps(nextProps, prevState) {
    nextProps.handler(nextProps.total);
    return null;
  }
  removeByIndex = i => {
    // remove finished to trash
    // * finished
    this.props.dispatchRemoveTrashByIndex(i);
  };
  render() {
    const list = this.props.trash.map((todo, index) => {
      return (
        <div key={index} className="clearfix">
          <Remove
            handler={e => {
              this.removeByIndex(index);
            }}
          />
          <Todo title={todo.title} tags={todo.tags} content={todo.content} />
        </div>
      );
    });
    return (
      <div className="TList clearfix">
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
const getTrash = (state, quantity, page) => {
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
  trash: getTrash(state.trash, ownProps.quantity, ownProps.page),
  total: state.trash.length
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  dispatchRemoveTrashByIndex: index => {
    dispatch(removeFromT(index));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TList);
