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
                  title={(
                      <a
                        href={href}
                        onClick={onClick}
                        className="Month__Header"
                      >
                        {year}/{month}
                      </a>
                    )}
                />
                <Match pattern={`/${year}/${month}`} component={Details} />
              </Card>
            );
          }}
      </Link>
    );
  }
}

export default Month;
