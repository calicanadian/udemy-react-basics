import React, { Component, Fragment } from 'react';
import styles from './Person.css';
// import Aux from '../../../hoc/Aux';

class Person extends Component {
  render() {
    console.log('[Person.js] rendering...');
    // JSX syntax with encapsulating div
    // return (
    //   <div className={styles.Person}>
    //     <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
    //     <p>{this.props.children}</p>
    //     <input type='text' onChange={this.props.changed} value={this.props.name} />
    //   </div>
    // );
    // Same result, but with Higher Order Component rendering
    return (
      // Aux is a custom built that was used in previous versions of React.
      // It was used there because new versions of React have React.Fragment available by default.
      // You can either set the encapsulating tags to use React.Fragment, or you can import the
      // Fragment from react and use it generally like this:
      <Fragment>
        <div className={styles.Person}>
          <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
          <p>{this.props.children}</p>
          <input type='text' onChange={this.props.changed} value={this.props.name} />
        </div>
      </Fragment>
    );
  }
};

export default Person;
