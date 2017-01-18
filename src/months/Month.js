import React from "react";
import Match from "react-router/Match";
import {Card,// CardActions,
  // CardHeader,
  // CardMedia,
  CardTitle} from "material-ui/Card";
import Link from "react-router/Link";
// import Subheader from "material-ui/Subheader";
// import Divider from "material-ui/Divider";
import cs from "classnames";
import Details from "./Details";
import "./Month.css";

const MonthTitle = ({onClick, href, isActive, year, month}) => isActive ? (
    <Link to="/" className="Month__Header">
      {year}/{month}
    </Link>
  ) : (
    <a href={isActive ? "/" : href} onClick={onClick} className="Month__Header">
      {year}/{month}
    </a>
  );

class Month extends React.Component {
  static propTypes = {
    year: React.PropTypes.number.isRequired,
    month: React.PropTypes.number.isRequired
  };

  render() {
    const {year, month} = this.props;

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
                        year={year}
                        month={month}
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
