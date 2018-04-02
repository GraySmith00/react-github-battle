
const React = require('react');
const ReactDOM = require('react-dom');
const PropTypes = require('prop-types')
require('./index.css');
const App = require('./components/App');



ReactDOM.render(
  <App />,
  document.getElementById('app')
);