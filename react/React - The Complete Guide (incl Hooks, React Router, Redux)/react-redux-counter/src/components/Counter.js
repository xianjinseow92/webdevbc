import { useSelector, useDispatch } from "react-redux"; // for accessing the react-redux store
import { useEffect } from "react";
import store from "store/index";

import classes from "./Counter.module.css";

const Counter = () => {
  useEffect(() => {
    store.subscribe((_) => {
      console.log(store.getState());
    }); // placed in use effect so we don't keep adding a new subscription whenever this component re-renders.
    // function used to just check latest state of store when an action is dispatched to store
  }, []);

  const dispatch = useDispatch(); // set up actions to be dispatched from this component to store
  const counter = useSelector((state) => state.counter); // react-redux hook.
  // takes in a function as an argument, which takes state as it's parameter.
  // you may then execute code to retrieve whatever properties you need from the global store's state.

  // ** ALSO AUTOMATICALLY SETS UP A SUBSCRIPTION TO THE STORE FOR THIS COMPONENT **
  // everytime the VALUE of the store of whatever this component has subscribed to updates
  // this component will update as well.
  // does not update when the WHOLE STORE updates. Only updates when the values you subscribed to updates

  console.log("Counter component updated");

  const toggleCounterHandler = () => {};
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT" });
  };
  const decrementHandler = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div>
        <button onClick={incrementHandler}>+</button>
        <div className={classes.value}>{counter}</div>
        <button onClick={decrementHandler}>-</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

/**
 * For React Class-based components
 */

// import { connect } from "react-redux"; // this is for class-based components
// import { Component } from "react"; // this is for class-based components

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }
//   decrementHandler() {
//     this.props.decrement();
//   }
//   toggleCounterHandler() {

//   }
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>+</button>
//           <button onClick={this.decrementHandler.bind(this)}>-</button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//       </main>
//     );
//   }
// };

// const mapStateToProps = state => {
//   /**
//    * Adds redux store state to component props
//    */
//   return {
//     counter: state.counter
//   }
// }

// const mapDispatchToProps = dispatch => {
//   /**
//    * Adds dispatch action to component props
//    */
//   return {
//     increment: () => dispatch({type: "INCREMENT"}),
//     decrement: () => dispatch({type: "decrement".toUpperCase()}),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
