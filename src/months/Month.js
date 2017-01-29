import React from "react";
import Match from "react-router/Match";
import {Card,CardTitle} from "material-ui/Card";
import Link from "react-router/Link";
import cs from "classnames";
import Details from "./Details";
import MonthTitle from "./MonthTitle";
import "./Month.css";

class Month extends React.Component {
  static propTypes = {
    year: React.PropTypes.number.isRequired,
    month: React.PropTypes.number.isRequired
  };

  render() {
    let {year, month} = this.props;
    let monthStart = new Date(year, month, 1);

    return (
      <Link to={`/${year}/${month}`}>
        {({onClick, href, isActive}) => {
            let className = cs("Month", {"Month--active": isActive});
            return (
              <Card className={className} zDepth={2}>
                <CardTitle
                  style={{padding: 0}}
                  title={
                    (
                      <MonthTitle
                        onClick={onClick}
                        href={href}
                        isActive={isActive}
                        month={monthStart}
                      />
                    )
                  }
                />
                <Match
                  exactly
                  pattern={`/${year}/${month}`}
                  component={Details}
                />
              </Card>
            );
          }}
      </Link>
    );
  }
}

export default Month;
