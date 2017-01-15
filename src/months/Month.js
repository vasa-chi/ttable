import React from "react";
import Paper from "material-ui/Paper";
import Link from "react-router/Link";
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
        <Paper className="Month" zDepth={2}>
          <span>{year}/{month}</span>
        </Paper>
      </Link>
    );
  }
}

export default Month;
