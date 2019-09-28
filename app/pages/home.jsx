const React = require('react');
const { Component } = require('react');
const { Link } = require('react-router-dom');

class App extends Component {
  render() {
    return (
    	<div className="App">
    		<h1>Welcome to the index page of this website</h1><br/>
    		<h3>This Project uses react, express, webpack.</h3><br/><br/>

    		Check for the use of react route : 
    		<Link to="/contact">Contact</Link><br/>
    		This Project also deals with non react(node js) routing : 
    		<a href="/about">About</a>
    	</div>
    );
  }
}

module.exports = App;