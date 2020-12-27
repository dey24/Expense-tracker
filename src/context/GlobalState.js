import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'
//initial state

const initialState = {
    transaction: [
        {id:1, text:'Flower', amount:-20},
        {id:1, text:'Groceries', amount:-70},
        {id:3, text:'Clothes', amount:-100},
        {id:4, text:'Books', amount:-150}
    ]
}

//create Context
export const GlobalContext = createContext(initialState);

//Provider components
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (<GlobalContext.Provider value = {{
        transactions: state.transactions 
    }}>
    {children}
    </GlobalContext.Provider>)
}