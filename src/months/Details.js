import React from "react";
import cs from "classnames";
import {CardText} from "material-ui/Card";
import {Tabs,Tab} from "material-ui/Tabs";
import LinearProgress from "material-ui/LinearProgress";
import "./Details.css";

class Details extends React.Component {
  state = {loading: true};

  componentDidMount() {
    setTimeout(() => this.setState({loading: false}), 3000);
  }

  render() {
    let {loading} = this.state;
    let className = cs("Details", {"Details--loading": loading});
    return (
      <CardText className={className}>
        {loading ? <LinearProgress mode="indeterminate" /> : (
              <Tabs>
                <Tab label="One"></Tab>
                <Tab label="Two"></Tab>
                <Tab label="Three"></Tab>
              </Tabs>
            )}
      </CardText>
    );
  }
}

export default Details;
