import React from "react";
import update from "immutability-helper";
import Match from "react-router/Match";
import Link from "react-router/Link";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";
import Month from "./Month";
import AddMonth from "./AddMonth";
import "./MonthsList.css";

class MonthsList extends React.Component {
  static contextTypes = {router: React.PropTypes.object.isRequired};

  state = {months: [{year: 2017, month: 0}]};

  onAddMonth = dayOfMonth => {
    const {router} = this.context;
    this.setState(
      {
        months: update(this.state.months, {
          $push: [
            {year: dayOfMonth.getFullYear(), month: dayOfMonth.getMonth()}
          ]
        })
      },
      () => router.transitionTo("/")
    );
  };

  render() {
    return (
      <div className="MonthsList">
        {
          this.state.months.map(({year, month}) => (
            <Month year={year} month={month} key={`${year}${month}`} />
          ))
        }
        <Link to="/new">
          <FloatingActionButton className="MonthsList__Add">
            <ContentAdd />
          </FloatingActionButton>
        </Link>
        <Match
          pattern="/new"
          render={() => <AddMonth onSave={this.onAddMonth} />}
        />
      </div>
    );
  }
}

export default MonthsList;
