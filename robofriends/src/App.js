import React, { Component } from 'react';
import './App.css';
import CardDeck from './CardDeck';
import SearchBar from './SearchBar';

class App extends Component {
constructor() {
  super();
  this.state = {
    robots: [],
    SearchField: ''
  }
}

onSearchChange(event) {
this.setState({SearchField: event.target.value})
};

render() {
  const {robots, SearchField} = this.state;
  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(SearchField.toLowerCase());
  })

   return (
    <div className="App">
      <h1 className>RoboFriends</h1>
      <SearchBar searchChange={this.onSearchChange}/>
      <CardDeck robots={filteredRobots}/>
    </div>
    );
  }
}

export default App;
