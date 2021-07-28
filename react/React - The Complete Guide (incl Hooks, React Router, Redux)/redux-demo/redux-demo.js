const redux = require("redux"); // node import, not javascript
// The goal of redux is to do different things inside the reducer to update the global state, based on dispatching of different actions.type

// Constants
const ADD = "ADD";
const MINUS = "MINUS";

/**
 * Create a redux-store application
 * That increments a counter by 1, using state.
 * HINT: you need a reducer, a subscriber and an action to trigger reducer and updates to subscriber
 */

// Store's reducers (methods to mutate state in store)
const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case ADD:
      return { counter: state.counter + 1 };
    case MINUS:
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

// Store, initialize with reducers (i.e., how the state will mutate in said store)
const store = redux.createStore(counterReducer);

// Subscribers (aka, your components)
const counterSubscriber = () => {
  const latestState = store.getState(); // you gotta getstate cause your components want the latest state
  console.log(latestState);
};

store.subscribe(counterSubscriber); // runs whenever store is updated

// Actions you wanna execute
const addMofo = () => {
  return {
    type: "ADD",
  };
};

const minusMofo = () => {
  return {
    type: "MINUS",
  };
};

store.dispatch(addMofo());
store.dispatch(minusMofo());