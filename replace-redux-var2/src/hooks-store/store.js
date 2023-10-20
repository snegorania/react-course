import { useState, useEffect } from 'react'

let globalState = {};
let listeners = [];
let actions = {};

export const useStore = () => {
    const setState = useState()[1];

    const dispatch = (actionIdentifier, payload) => {
        const newState = actions[actionIdentifier](globalState, payload);
        globalState = {...globalState, ...newState};
        for (let listener of listeners) {
            listener(globalState);
        }
    }

    useEffect(() => {
        listeners.push(setState);
        return () => {
            listeners.filter(li => li !== setState);
        }
    }, [setState])

    return [globalState, dispatch];
}


export const initStore = (userActions, initialStore) => {
    if (initialStore) {
        globalState = {...globalState, ...initialStore}
    }
    
    actions = {...actions, ...userActions}
} 