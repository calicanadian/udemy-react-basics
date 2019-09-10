import React, { useEffect } from 'react';
import styles from './Cockpit.css';

const cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Http request...
    const timer = setTimeout(() => {
      alert('Saved data to cloud!'); // Simulates an HTTP request
    }, 1000);
    return () => {
      clearTimeout(timer); // Simulates removing a function in cleanup
      console.log('[Cockpit.js] cleanup work in useEffect');
    }; // This will run before the unmount happens
  }, []); // passing an empty array lets it run the first time (componentDidMount)
  // This second arguement is a list of elements that should be watched for the update.
  // This useEffect will run when each item listed in the second arguement is changed.

  useEffect(() => {
    console.log('[Cockpit.js] useEffect 2');
    return() => {
      console.log('[Cockpit.js] cleanup work in useEffect 2');
    }; // This will run before the next time the useEffect is ran. This is useful for some cleanup work
    // to be done if you say, want to remove the classes of elements before setting active state. It basically
    // will undo the work done in the first render before the re-render.
  }); // Notice nothing was passed as a second arguement. This means it will run on each action.

  // }, [props.persons]) // this will only run the useEffect when the persons object is changed

  // useEffect(() => {}) // You can have multiple useEffect calls with different hooks.

  let assignedClasses = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = styles.red;
  }

  const classes = [];
  if (props.personsLength <= 2) {
    classes.push(styles.red); // classes = ['red']
  }
  if (props.personsLength <= 1) {
    classes.push(styles.bold); // classes = ['red', 'bold']
  }

  return (
    <div className={styles.Cockpit}>
      <h1>{props.title}</h1>
      <p className={classes.join(' ')}>This is really working!!</p>
      <button className={btnClass} onClick={props.toggle}>Switch Name</button>
    </div>
  );
};
// memoization of the component
export default React.memo(cockpit);
