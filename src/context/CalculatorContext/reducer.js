import {CALCULATOR_ADD, CALCULATOR_SUBTRACT} from "./actionTypes";
import {updateState} from "../../utils/context/context";

export const calculatorReducer = (state, action) => {
    switch (action.type) {
        case CALCULATOR_ADD:
            return updateState(state, {
                total: state.total + action.data,
                history: [
                    ...state.history,
                    state.total
                ]
            });
        case CALCULATOR_SUBTRACT:
            return updateState(state, {
                total: state.total - action.data,
                history: [
                    ...state.history,
                    state.total
                ]
            });
        default:
            throw new Error(`Action type ${action.type} not available in calculator reducer`);
    }
}
