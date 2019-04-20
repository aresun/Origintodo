import React, { Component } from "react";
/* router */
import { Switch, Route } from "react-router-dom";
/* conponents */
import Nav from "./componets/nav/Nav";
import Sidebar from "./componets/nav/Sidebar";
import Home from "./componets/mainContent/Home";
import Add from "./componets/mainContent/Add";
import Unfinished from "./componets/mainContent/Unfinished";

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
            <Route exact path="/unfinished" component={Unfinished} />
          </Switch>
        </div>
      </div>
    );
  }
}
export default App;
