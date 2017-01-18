import React from "react";
import cs from "classnames";
import {CardText} from "material-ui/Card";
import {Tabs,Tab} from "material-ui/Tabs";
import LinearProgress from "material-ui/LinearProgress";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";
import "./Details.css";

class Details extends React.Component {
  state = {loading: true, tab: "expenses"};

  componentDidMount() {
    setTimeout(() => this.setState({loading: false}), 100);
  }

  onSelectTab = tab => {
    this.setState({tab});
  };

  render() {
    let {loading, tab} = this.state;
    let className = cs("Details", {"Details--loading": loading});

    return (
      <CardText className={className}>
        {
          loading
            ? (
              <LinearProgress
                mode="indeterminate"
                className="Details__Progress"
              />
            )
            : (
              <Tabs value={tab} onChange={this.onSelectTab}>
                <Tab label="Доходы" value="earnings">
                  123
                </Tab>
                <Tab label="Обязательные Расходы" value="mandatory">
                  456
                </Tab>
                <Tab label="Расходы" value="expenses">
                  <Table fixedHeader>
                    <TableHeader displaySelectAll={false}>
                      <TableRow>
                        <TableHeaderColumn>Дата</TableHeaderColumn>
                        <TableHeaderColumn>Описание</TableHeaderColumn>
                        <TableHeaderColumn>Сумма</TableHeaderColumn>
                        <TableHeaderColumn>Бюджет на день</TableHeaderColumn>
                        <TableHeaderColumn>Сальдо</TableHeaderColumn>
                      </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                      <TableRow>
                        <TableRowColumn>01.01.2017</TableRowColumn>
                        <TableRowColumn>текст</TableRowColumn>
                        <TableRowColumn>100</TableRowColumn>
                        <TableRowColumn>1200</TableRowColumn>
                        <TableRowColumn>1100</TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>01.01.2017</TableRowColumn>
                        <TableRowColumn>текст</TableRowColumn>
                        <TableRowColumn>100</TableRowColumn>
                        <TableRowColumn>1200</TableRowColumn>
                        <TableRowColumn>1100</TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>01.01.2017</TableRowColumn>
                        <TableRowColumn>текст</TableRowColumn>
                        <TableRowColumn>100</TableRowColumn>
                        <TableRowColumn>1200</TableRowColumn>
                        <TableRowColumn>1100</TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>01.01.2017</TableRowColumn>
                        <TableRowColumn>текст</TableRowColumn>
                        <TableRowColumn>100</TableRowColumn>
                        <TableRowColumn>1200</TableRowColumn>
                        <TableRowColumn>1100</TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>01.01.2017</TableRowColumn>
                        <TableRowColumn>текст</TableRowColumn>
                        <TableRowColumn>100</TableRowColumn>
                        <TableRowColumn>1200</TableRowColumn>
                        <TableRowColumn>1100</TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>01.01.2017</TableRowColumn>
                        <TableRowColumn>текст</TableRowColumn>
                        <TableRowColumn>100</TableRowColumn>
                        <TableRowColumn>1200</TableRowColumn>
                        <TableRowColumn>1100</TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>01.01.2017</TableRowColumn>
                        <TableRowColumn>текст</TableRowColumn>
                        <TableRowColumn>100</TableRowColumn>
                        <TableRowColumn>1200</TableRowColumn>
                        <TableRowColumn>1100</TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>01.01.2017</TableRowColumn>
                        <TableRowColumn>текст</TableRowColumn>
                        <TableRowColumn>100</TableRowColumn>
                        <TableRowColumn>1200</TableRowColumn>
                        <TableRowColumn>1100</TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>01.01.2017</TableRowColumn>
                        <TableRowColumn>текст</TableRowColumn>
                        <TableRowColumn>100</TableRowColumn>
                        <TableRowColumn>1200</TableRowColumn>
                        <TableRowColumn>1100</TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>01.01.2017</TableRowColumn>
                        <TableRowColumn>текст</TableRowColumn>
                        <TableRowColumn>100</TableRowColumn>
                        <TableRowColumn>1200</TableRowColumn>
                        <TableRowColumn>1100</TableRowColumn>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Tab>
              </Tabs>
            )
        }
      </CardText>
    );
  }
}

export default Details;
