const React = require('react');
const { Component } = require('react');
const { Link } = require('react-router-dom');
require('./app.css')

class App extends Component {
  render() {
    return (
    	<div className="App">
            <main>
    		<h1>Welcome to the contact page of this website</h1><br/>
            <h2>This is another webpage which uses react components to render</h2><br/><br/>


    		To check with non react(node js) routing : 
    		<a href="/about">About</a>
            </main>
    	</div>
    );
  }
}

module.exports = App;