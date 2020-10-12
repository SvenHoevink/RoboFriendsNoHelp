import React, { Component } from 'react';
import './App.css';
import CardDeck from './CardDeck';
import tachyons from 'tachyons'
import SearchBar from './SearchBar';

class App extends Component {
constructor() {
  super();
  this.state = {
    robots: robots,
    searchField: ''
  }
}

onSearchChange(event) {
this.setState({searchField: event.target.value})
};

render() {
   return (
    <div className="App">
      <h1>RoboFriends</h1>
      <SearchBar searchChange={this.onSearchChange}/>
      <CardDeck />
    </div>
    );
  }
}

export default App;
