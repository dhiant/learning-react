import React from "react";
import CardList from "./CardList";
import { robots } from "./robots_name";
import SearchBox from "./SearchBox";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: "",
    };
  }
  onSearchChange = (event) => {
    this.setState({
      searchfield: event.target.value
    });
  };
  render() {
    const filterRobot = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="text-center ">
        <h2 className="font-bold text-4xl text-emerald-200 robotstitle">COOL ROBOTS</h2>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filterRobot} />
      </div>
    );
  }
}

export default App;
