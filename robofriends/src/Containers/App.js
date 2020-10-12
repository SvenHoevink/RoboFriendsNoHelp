import React, { Component } from 'react';
import '../Containers/App.css';
import CardDeck from '../Components/CardDeck';
import SearchBar from '../Components/SearchBar';

class App extends Component {
constructor() {
  super();
  this.state = {
    robots: [],
    SearchField: ''
  }
}

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users => {this.setState({ robots: users})});
}

onSearchChange = (event) => {
this.setState({SearchField: event.target.value})
};

render() {
  const {robots, SearchField} = this.state;
  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(SearchField.toLowerCase());
  })

   return (
    <div className="App tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBar searchChange={this.onSearchChange}/>
      <CardDeck robots={filteredRobots}/>
    </div>
    );
  }
}

export default App;
