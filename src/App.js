import './App.css';
import {useCalculator} from "./context/CalculatorContext/useCalculator";

const App = () => {
    const {
        state, add, subtract
    } = useCalculator();

    return (
        <div className="App">
            <div className="calculator">
                <div className="display">
                    {state.total}
                </div>
                <div className="history">
                    {
                        state.history.map((historyTotal, key) => <span key={key} className="historyNumber">{ historyTotal }</span>)
                    }
                </div>
                <div className="button" onClick={() => add(1)}>
                    ADD ONE
                </div>
                <div className="button" onClick={() => add(5)}>
                    ADD FIVE
                </div>
                <div className="button" onClick={() => add(10)}>
                    ADD TEN
                </div>
                <div className="button" onClick={() => subtract(1)}>
                    SUBTRACT ONE
                </div>
                <div className="button" onClick={() => subtract(5)}>
                    SUBTRACT FIVE
                </div>
                <div className="button" onClick={() => subtract(10)}>
                    SUBTRACT TEN
                </div>
            </div>
        </div>
    );
}

export default App;
