import React, {Component} from "react";
import AppBar from "material-ui/AppBar";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import Link from "react-router/Link";

import AppContent from "./AppContent";

import "./App.css";

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
    this.setState({open: false});
  }

  render() {
    return (
      <div className="App">
        <AppBar
          onLeftIconButtonTouchTap={this.onDrawerOpen.bind(this)}
          title={<Link to="/">TTable</Link>}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <Drawer
          docked={false}
          open={this.state.open}
          onRequestChange={open => this.setState({open})}
        >
          <MenuItem onTouchTap={this.onDrawerClose}>
            <Link to="/one">Page One</Link>
          </MenuItem>
        </Drawer>
        <AppContent />
      </div>
    );
  }
}

export default App;
