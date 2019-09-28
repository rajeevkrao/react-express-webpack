const React = require('react');
const { Component } = require('react');

const { Route, Switch } = require('react-router-dom');
const Home = require('./pages/home');
const Contact = require('./pages/contact');

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/> 
          <Route exact path='/contact' component={Contact}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}
module.exports = App;