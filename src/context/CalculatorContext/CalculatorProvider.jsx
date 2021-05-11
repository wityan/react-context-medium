import React from 'react';
import {calculatorReducer} from "./reducer";
import {dispatchAction} from "../../utils/context/context";
import {CALCULATOR_ADD, CALCULATOR_SUBTRACT} from "./actionTypes";

const initialCalculatorContext = {
  total: 0,
  history: []
};

export const CalculatorContext = React.createContext();

const CalculatorProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(calculatorReducer, initialCalculatorContext);

  const add = (amount) => dispatchAction(dispatch, CALCULATOR_ADD, amount);
  const subtract = (amount) => dispatchAction(dispatch, CALCULATOR_SUBTRACT, amount);

  const value = {
    state,
    add,
    subtract
  };

  return <CalculatorContext.Provider value={value}>{children}</CalculatorContext.Provider>
};

export default CalculatorProvider;
