import React, { Component } from "react";
import { Route } from "react-router-dom";
import Toolbar from "./Toolbar";
import Drawer from "./Drawer";
import MonthList from "../months";

class App extends Component {
  state = { openDrawer: false };

  onOpenDrawer = () => {
    this.setState({ openDrawer: true });
  };

  onCloseDrawer = () => {
    this.setState({ openDrawer: false });
  };

  render() {
    return (
      <div className="App">
        <Toolbar onLeftIconClick={this.onOpenDrawer} />
        <Drawer
          active={this.state.openDrawer}
          onOverlayClick={this.onCloseDrawer}
        />
        <Route exact path="/months" component={MonthList} />
      </div>
    );
  }
}

export default App;
