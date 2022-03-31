import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }
  onSearchChange = (event) => {
    this.setState({
      searchfield: event.target.value,
    });
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          robots: json,
        });
      });
  }
  render() {
    const { robots, searchfield } = this.state;
    const filterRobot = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !robots.length ? (
      <h1 className="text-white">Loading....</h1>
    ) : (
      <div className="text-center ">
        <h2 className="font-bold text-4xl text-emerald-200 robotstitle">
          COOL ROBOTS
        </h2>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filterRobot} />
        </Scroll>
      </div>
    );
  }
}

export default App;
