import React, {Component} from "react";
import {AppBar, Drawer, MenuItem} from "material-ui";
import {Link, Miss} from "react-router";
import "./App.css";

const NoMatch = function({location}) {
  return (
    <div>
      <code>{`No match for ${location.pathname}`}</code>
    </div>
  );
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {open: false};

    this.onDrawerOpen = this.onDrawerOpen.bind(this);
    this.onDrawerClose = this.onDrawerClose.bind(this);
  }

  onDrawerOpen() {
    this.setState({open: true});
  }

  onDrawerClose() {
    console.log(this);
    this.setState({open: false});
  }

  render() {
    return (
      <div className="App">
        <AppBar onLeftIconButtonTouchTap={
          this.onDrawerOpen.bind(this)
        } title="Ttable" iconClassNameRight="muidocs-icon-navigation-expand-more" />
        <Drawer docked={false} open={this.state.open} onRequestChange={
          open => this.setState({open})
        }>
          <MenuItem onTouchTap={this.onDrawerClose}>
            <Link to="/one">Page One</Link>
          </MenuItem>
          <MenuItem onTouchTap={this.onDrawerClose}>
            <Link to="/two">Page Two</Link>
          </MenuItem>
        </Drawer>
        <Miss component={NoMatch} />
      </div>
    );
  }
}

export default App;
