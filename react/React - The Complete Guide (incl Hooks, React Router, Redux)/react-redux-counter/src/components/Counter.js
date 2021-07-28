/**
 * Old redux method
 */
// import {
//   INCREMENT,
//   DECREMENT,
//   CUSTOM_INCREASE,
//   TOGGLE_COUNTER,
// } from "constants/constants";

import { useSelector, useDispatch } from "react-redux"; // for accessing the react-redux store
import { useEffect } from "react";

import store from "store/index";
import { counterActions } from "store/reducers";

import classes from "./Counter.module.css";

const Counter = () => {
  useEffect(() => {
    store.subscribe((_) => {
      console.log(store.getState());
    }); // placed in use effect so we don't keep adding a new subscription whenever this component re-renders.
    // function used to just check latest state of store when an action is dispatched to store
  }, []);
  console.log("Counter component updated");

  const dispatch = useDispatch(); // set up actions to be dispatched from this component to store
  const counter = useSelector((state) => state.counter); // react-redux hook.
  const show = useSelector((state) => state.showCounter);
  // takes in a function as an argument, which takes state as it's parameter.
  // you may then execute code to retrieve whatever properties you need from the global store's state.

  // ** ALSO AUTOMATICALLY SETS UP A SUBSCRIPTION TO THE STORE FOR THIS COMPONENT **
  // everytime the VALUE of the store of whatever this component has subscribed to updates
  // this component will update as well.
  // does not update when the WHOLE STORE updates. Only updates when the values you subscribed to updates

  const customAmount = 10;

  const toggleCounterHandler = () => {
    // dispatch({ type: TOGGLE_COUNTER }); // old redux method
    dispatch(counterActions.toggleCounter());
  };
  const incrementHandler = () => {
    // dispatch({ type: INCREMENT }); // old redux method
    dispatch(counterActions.increment()); 
  };
  const increaseHandler = () => {
    // dispatch({ type: CUSTOM_INCREASE, value: customAmount }); // old redux method
    dispatch(counterActions.customIncrease(10)); // pass in an action object for us. { type: "SOME_UNIQUE_IDENTIFIER", payload: <value_passed_in> }
  };
  const decrementHandler = () => {
    // dispatch({ type: DECREMENT }); // old redux method
    dispatch(counterActions.decrement()); // pass in action object for us
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>+</button>
        <button onClick={increaseHandler}>Increase by {customAmount}</button>
        <button onClick={decrementHandler}>-</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
