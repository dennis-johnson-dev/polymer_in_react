var React = require('react');
require("html!../polymer_elements/my_element.html");

var Hello = React.createClass({

  getInitialState: function() {
    return {
      name: 'Strongbad'
    };  
  },  

  render: function() {
    return (
      <div>
        <div dangerouslySetInnerHTML={{__html: '<my-element username=' + this.state.name + '></my-element>'}} />
        <p> 
          Hello from outside my-element.
          <span className="red">The global red class is set to color: blue</span>
        </p>
        <p>
          <button className="btn btn-primary">Regular button</button>
        </p>
      </div>
    );  
  }   
}); 

React.render(<Hello name="World" />, document.body);