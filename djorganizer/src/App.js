import React, { Component } from 'react';
import NavBar from './components/navbar';
import { Jumbotron } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
				<NavBar />
				<Jumbotron>
					<h1> Notes App </h1>
				</Jumbotron>
			</div>
    );
  }
}

export default App;
