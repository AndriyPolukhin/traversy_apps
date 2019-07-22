"use strict";

var visibility = false;

var toggleVisibility = function toggleVisibility() {
  visibility = !visibility;
  render();
};

var render = function render() {
  var jsx = React.createElement("div", null, React.createElement("h1", null, "Visibility Toggle"), React.createElement("button", {
    onClick: toggleVisibility
  }, visibility ? 'Hide details' : 'Show Details'), React.createElement("h2", null, visibility ? 'Here are the details' : ''));
  ReactDOM.render(jsx, appRoot);
};

var appRoot = document.getElementById('app');
render();
