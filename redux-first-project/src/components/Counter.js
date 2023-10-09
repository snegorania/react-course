import React from 'react';
import { connect } from 'react-redux';

import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
  const isCounter = useSelector(state => state.isCounter);
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch({type: 'TOGGLE'});
  };

  const incrementHandler = () => {
    dispatch({type: 'INCREMENT'});
  }

  const increaseHandler = () => {
    dispatch({type: 'INCREASE', payload: 5});
  }

  const decrementHandler = () => {
    dispatch({type: 'DECREMENT'})
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      { isCounter &&
        <div>
          <button onClick={incrementHandler}>+</button>
          <button onClick={increaseHandler}>+5</button>
          <button onClick={decrementHandler}>-</button>
        </div>
      }
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

/*class Counter extends React.Component {
  toggleCounterHandler() {
    this.props.toggle();
  };

  incrementHandler() {
    this.props.increment();
  }

  increaseHandler() {
    this.props.increase(5);
  }

  decrementHandler() {
    this.props.decrement();
  }

  render() {
    return (
      <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{this.props.counter}</div>
      { this.props.isCounter &&
        <div>
          <button onClick={this.incrementHandler.bind(this)}>+</button>
          <button onClick={this.increaseHandler.bind(this)}>+5</button>
          <button onClick={this.decrementHandler.bind(this)}>-</button>
        </div>
      }
      <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
    </main>
    )
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter,
    isCounter: state.isCounter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({type: 'INCREMENT'}),
    decrement: () => dispatch({type: 'DECREMENT'}),
    increase: (payload) => dispatch({type: 'INCREASE', payload}),
    toggle: () => dispatch({type: 'TOGGLE'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);*/
