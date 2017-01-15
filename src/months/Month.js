import React from "react";
import Paper from "material-ui/Paper";
import Link from "react-router/Link";
import "./Month.css";

class Month extends React.Component {
  static propTypes = {
    month: React.PropTypes.shape({
      year: React.PropTypes.number.isRequired,
      month: React.PropTypes.number.isRequired
    })
  };

  render() {
    const {month} = this.props;

    return (
      <Link to={`/${month.year}/${month.month}`}>
        <Paper className="Month" zDepth={2}>
          <span>{month.year}/{month.month}</span>
        </Paper>
      </Link>
    );
  }
}

export default Month;
