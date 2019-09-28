const React = require('react');
const { render } = require('react-dom');
const { BrowserRouter } = require('react-router-dom');

/* Handles routes from routes.jsx */
const Routes = require('./route');

render((
    <BrowserRouter>
        <Routes/>
    </BrowserRouter>
), document.getElementById('App'));