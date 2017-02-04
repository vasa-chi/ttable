import React, { Component } from "react";
import AppBar from "react-toolbox/lib/app_bar/AppBar";
import Navigation from "react-toolbox/lib/navigation/Navigation";
import Link from "react-toolbox/lib/link/Link";
import logo from "../logo.svg";

function Logo() {
  return <img src={logo} style={{ height: "100%" }} role="presentation" />;
}

class Toolbar extends Component {
  render() {
    return (
      <AppBar
        title="TTable"
        leftIcon="menu"
        rightIcon={<Logo />}
        {...this.props}
      >
        <Navigation type="horizontal">
          <Link href="http://" label="Inbox" icon="inbox" />
          <Link href="http://" label="Profile" icon="person" />
        </Navigation>
      </AppBar>
    );
  }
}

export default Toolbar;
