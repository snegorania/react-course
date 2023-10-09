import { createStore } from 'redux';

const initialState = {
    isCounter: false,
    counter: 0
}

const reducer = (state = initialState, action) => {
    if (action.type === 'INCREMENT') {
        return {isCounter: state.isCounter, counter: state.counter + 1}
    }

    if (action.type === 'DECREMENT') {
        return {isCounter: state.isCounter, counter: state.counter - 1}
    }

    if (action.type === 'INCREASE') {
        return {isCounter: state.isCounter, counter: state.counter + action.payload}
    }

    if (action.type === 'TOGGLE') {
        return {isCounter: !state.isCounter, counter: state.counter}
    }

    return {isCounter: state.isCounter, counter: state.counter}
}

const store = createStore(reducer);

export default store;