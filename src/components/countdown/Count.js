import React, { Component } from "react";
import Clock from "./Clock";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { deadline: "March, 13, 2023 00:00:01" };
  }
  render() {
    return (
      <div className="App">
        <Clock deadline={this.state.deadline} />
      </div>
    );
  }
}
export default App;
