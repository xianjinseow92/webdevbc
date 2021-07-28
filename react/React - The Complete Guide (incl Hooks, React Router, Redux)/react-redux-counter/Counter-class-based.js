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
