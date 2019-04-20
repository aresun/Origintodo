import React, { Component } from "react";
/* router */
import { Switch, Route } from "react-router-dom";
/* conponents */
import Nav from "./componets/nav/Nav";
import Sidebar from "./componets/nav/Sidebar";
import Add from "./componets/mainContent/Add";
import Home from "./componets/mainContent/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Sidebar />
        <div id="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/add" component={Add} />
            <Route exact path="/add" component={Add} />
          </Switch>
        </div>
      </div>
    );
  }
}
export default App;
