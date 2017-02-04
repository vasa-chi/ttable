import React, { Component } from "react";
import Navigation from "react-toolbox/lib/navigation/Navigation";
import Drawer from "react-toolbox/lib/drawer/Drawer";
import Link from "../common/Link";

class Shell extends Component {
  render() {
    return (
      <Drawer {...this.props}>
        <Navigation type="vertical">
          <Link to="months" label="One" icon="person" />
        </Navigation>
      </Drawer>
    );
  }
}

export default Shell;
