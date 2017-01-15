import React from "react";
import update from "immutability-helper";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";
import Month from "./Month";
import "./MonthsList.css";

class MonthsList extends React.Component {
  constructor(props) {
    super(props);

    this.onAddMonth = this.onAddMonth.bind(this);

    this.state = {months: []};
  }

  onAddMonth() {
    this.setState({
      months: update(this.state.months, {$push: [{year: 2016, month: 1}]})
    });
  }

  render() {
    return (
      <div className="MonthsList">
        {
          this.state.months.map(
            (month, idx) => <Month month={month} key={idx} />
          )
        }
        <FloatingActionButton className="MonthsList__Add" onClick={
          this.onAddMonth
        }>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    );
  }
}

export default MonthsList;
