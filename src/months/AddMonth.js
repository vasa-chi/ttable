import React from "react";
import Link from "react-router/Link";
import Dialog from "material-ui/Dialog";
import DatePicker from "material-ui/DatePicker";
import FlatButton from "material-ui/FlatButton";
import startOfMonth from "date-fns/start_of_month";
import {monthNameFormat} from "./format";

class AddMonth extends React.Component {
  static propTypes = {onSave: React.PropTypes.func.isRequired};

  state = {month: null};

  onBeginChange = (evt, date) => {
    this.setState({month: startOfMonth(date)});
  };

  onSave = () => {
    this.props.onSave(this.state.month);
  };

  render() {
    let {month} = this.state;
    let actions = [
      <Link to="/"><FlatButton label="Отмена" primary /></Link>,
      <FlatButton label="Добавить" primary onTouchTap={this.onSave} />
    ];

    return (
      <Dialog title="Добавить месяц" modal open actions={actions}>
        <DatePicker
          hintText="Выберите месяц"
          DateTimeFormat={global.Intl.DateTimeFormat}
          locale="ru"
          autoOk
          value={month}
          onChange={this.onBeginChange}
          formatDate={monthNameFormat}
        />
      </Dialog>
    );
  }
}

export default AddMonth;
