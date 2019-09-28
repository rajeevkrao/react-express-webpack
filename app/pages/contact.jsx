const React = require('react');
const { Component } = require('react');
const { Link } = require('react-router-dom');

class App extends Component {
  render() {
    return (
    	<div className="App">
    		<h1>Welcome to the contact page of this website</h1><br/>
            <h2>This is another webpage which uses react components to render</h2><br/><br/>


    		To check with non react(node js) routing : 
    		<Link to="/about">About</Link>
    	</div>
    );
  }
}

module.exports = App;