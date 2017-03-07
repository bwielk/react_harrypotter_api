var React = require('react');
var ReactDOM = require('react-dom');
var CharacterContainer = require('./containers/CharacterContainer.jsx');

window.onload = function(){
  ReactDOM.render(
    <CharacterContainer />,
    document.getElementById('app')
  );
}
