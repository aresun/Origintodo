import React, { Component } from "react";
import FinishedList from "./FList";
import Page from "./Page";

class Finished extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 1, // just for Unfinished list's update
      quantity: 8, // as a const, to configure
      total: 0, // update from Unfinished list
      maxPage: 1 // caculated from update total
    };
  }
  /* events */
  updateTotal = num => {
    const right = num % this.state.quantity;
    const left = Math.floor(num / this.state.quantity);
    const maxPage = right > 0 ? left + 1 : left;

    this.setState({ total: num, maxPage });
  };
  updateCurrent = num => {
    this.setState({ current: num });
  };
  render() {
    const { quantity, current, maxPage } = this.state;
    return (
      <div className="Finished clearfix">
        <FinishedList
          quantity={quantity}
          page={current}
          handler={this.updateTotal}
        />
        <Page updateCurrent={this.updateCurrent} maxPage={maxPage} />
      </div>
    );
  }
}
export default Finished;
