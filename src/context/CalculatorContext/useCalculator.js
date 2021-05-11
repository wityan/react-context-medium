import React from 'react';
import {CalculatorContext} from "./CalculatorProvider";

export const useCalculator = () => {
    const context = React.useContext(CalculatorContext);

    if (context === undefined) {
        throw new Error(`useCalculator must be used within a CalculatorProvider`)
    }

    return context;
}
