import React from "react";
import Link from "react-router/Link";
import {monthNameFormat} from "./format";

class MonthTitle extends React.Component {
  static propTypes = {
    onClick: React.PropTypes.func.isRequired,
    href: React.PropTypes.string.isRequired,
    isActive: React.PropTypes.bool.isRequired,
    month: React.PropTypes.instanceOf(Date)
  };

  render() {
    let {onClick, href, isActive, month} = this.props;
    return isActive ? (
        <Link to="/" className="Month__Header">
          {monthNameFormat(month)}
        </Link>
      ) : (
        <a href={href} onClick={onClick} className="Month__Header">
          {monthNameFormat(month)}
        </a>
      );
  }
}

export default MonthTitle;
