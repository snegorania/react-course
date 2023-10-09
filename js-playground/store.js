const redux = require('redux');

const initialState = {counter: 0, logs: []}

const reduser = (state = initialState, action) => {

    if (action.type === 'INCREMENT') {
        return { 
            counter: state.counter + 1, 
            logs: [...state.logs,`command: increment, prev state: ${state.counter}, current state: ${state.counter + 1}`]
        };
    }

    if (action.type === 'DECREMENT') {
        return { 
            counter: state.counter - 1, 
            logs: [...state.logs,`command: decrement, prev state: ${state.counter}, current state: ${state.counter - 1}`]
        };
    }

    if (action.type === 'INCREASE_VALUE') {
        return { 
            counter: state.counter + action.payload, 
            logs: [...state.logs,`command: increase, ${action.payload && `value: ${action.payload}`}, prev state: ${state.counter}, current state: ${state.counter + action.payload}`]
        };
    }

    if (action.type === 'DECREASE_VALUE') {
        return { 
            counter: state.counter - action.payload, 
            logs: [...state.logs,`command: decrease, ${action.payload && `value: ${action.payload}`}, prev state: ${state.counter}, current state: ${state.counter - action.payload}`]
        };
    }

    if (action.type === 'LOG') {
        return { 
            counter: state.counter, 
            logs: [...state.logs, `command: log, state: ${state.counter}`]
        };
    }

    if (action.type === 'CLEAR') {
        return {
            counter: 0, 
            logs: [...state.logs, `command: clear, state: ${0}`]
        }
    }

    return state;
}

const store = redux.createStore(reduser);

module.exports = { store };