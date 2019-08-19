import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Ryan", age: 36 },
      { name: "Manu", age: 30 },
      { name: "Stephanie", age: 28 }
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // this.state.persons[0].name = "Mr. Awesome";
    this.setState({persons: [
      { name: newName, age: 36 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 31 }
    ]});
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Ryan", age: 36 },
        { name: event.target.value, age: 29 },
        { name: "Stephanie", age: 31 }
      ]
    });
  };

  togglePersonsHandler = () => {
    // ES6 syntax creates a method on the class
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      fontSize: '14px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <button style={style} onClick={this.togglePersonsHandler}>Switch Name</button>
        <p>This is really working!!</p>

        {
          this.state.showPersons ?
            <div>
              <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My Hobbies: Racing</Person>
              <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, "The Dude")} changed={this.nameChangedHandler} />
              <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
            </div> : null
        }
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1',null, "Does this work now?"));
  }
}

export default App;
