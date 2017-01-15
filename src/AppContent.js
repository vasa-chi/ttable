import React from "react";
import {Miss,Match} from "react-router";
import createAsyncComponent from "./createAsyncComponent";

const NoMatch = function({location}) {
  return (
    <div>
      <code>{`No match for ${location.pathname}`}</code>
    </div>
  );
};

const MonthsList = createAsyncComponent(function() {
  return new Promise(function(resolve) {
    require.ensure([], function() {
      resolve(require("./months/MonthsList").default);
    });
  });
});

class AppContent extends React.Component {
  render() {
    return (
      <div className="App__content">
        <Match pattern="/" exactly component={MonthsList} />
        <Miss component={NoMatch} />
      </div>
    );
  }
}

export default AppContent;
