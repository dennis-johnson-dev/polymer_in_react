/* @jsx React.DOM */
window.Reactive_Elements = {};

window.Reactive_Elements.MyReactiveElement = React.createClass({displayName: 'MyReactiveElement',
  getInitialState: function() {
    return { color: true };
  },

  render: function() {
    var color = this.state.color ? 'red' : 'blue';
    return React.DOM.p(null, 'Hello from React, ' + this.props.property + ' ' + color); 
  },

  changeColor: function(color) {
    this.setState({ color: !this.state.color });
  }
});

document.registerReact('my-reactive-element', window.Reactive_Elements.MyReactiveElement);