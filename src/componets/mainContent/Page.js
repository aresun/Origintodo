import React, { Component } from "react";

export class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1
    };
  }

  /* --- utilities --- */
  /* no validation */
  // send data to parent
  gotoPage = i => {
    this.setState({
      currentPage: i
    });
    this.props.updateCurrent(i);
  };
  /* --- utilities --- */
  /* events */
  toTopPage = () => {
    if (this.state.currentPage !== 1) {
      this.gotoPage(1);
    }
  };
  toBottomPage = () => {
    const { maxPage } = this.props;
    const current = this.state.currentPage;

    if (current !== maxPage && maxPage > 1) {
      this.gotoPage(maxPage);
    }
  };
  toPrevSibling = () => {
    const current = this.state.currentPage;
    if (current > 1) {
      this.gotoPage(current - 1);
    }
  };
  toNextSibling = () => {
    const { currentPage } = this.state;
    const maxPage = this.props.maxPage;

    if (currentPage < maxPage) {
      this.gotoPage(currentPage + 1);
    }
  };
  handleCurrentChange = e => {
    const value = e.target.value;
    const maxPage = this.props.maxPage;
    if (value > 0 && value !== this.state.currentPage && value <= maxPage) {
      this.setState({ currentPage: value });
      this.props.updateCurrent(value);
      this.gotoPage(value);
    }
  };

  render() {
    const { maxPage } = this.props;
    const current = this.state.currentPage;

    return (
      <div className="Page">
        <span onClick={this.toTopPage}>Top</span>
        <span onClick={this.toPrevSibling}>Prev</span>
        {current - 3 > 0 ? (
          <span
            onClick={e => {
              this.gotoPage(current - 3);
            }}
          >
            {current - 3}
          </span>
        ) : null}
        {current - 2 > 0 ? (
          <span
            onClick={e => {
              this.gotoPage(current - 2);
            }}
          >
            {current - 2}
          </span>
        ) : null}
        {current - 1 > 0 ? (
          <span
            onClick={e => {
              this.gotoPage(current - 1);
            }}
          >
            {current - 1}
          </span>
        ) : (
          <span>...</span>
        )}
        <input
          type="text"
          value={this.state.currentPage}
          onChange={this.handleCurrentChange}
        />
        {current + 1 > maxPage ? (
          <span>...</span>
        ) : (
          <span
            onClick={e => {
              this.gotoPage(current + 1);
            }}
          >
            {current + 1}
          </span>
        )}
        {current + 2 > maxPage ? null : (
          <span
            onClick={e => {
              this.gotoPage(current + 2);
            }}
          >
            {current + 2}
          </span>
        )}
        {current + 3 > maxPage ? null : (
          <span
            onClick={e => {
              this.gotoPage(current + 3);
            }}
          >
            {current + 3}
          </span>
        )}
        <span onClick={this.toNextSibling}>Next</span>
        <span onClick={this.toBottomPage}>Bottom</span>
      </div>
    );
  }
}

export default Page;
