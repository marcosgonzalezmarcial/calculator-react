import "./styles.css";
import { useReducer } from "react";
import CalculatorDisplay from "./components/CalculatorDisplay/CalculatorDisplay";
import ClearButton from "./components/Buttons/ClearButton";
import OperatorButton from "./components/Buttons/OperatorButton";
import DigitButton from "./components/Buttons/DigitButton";
import EqualButton from "./components/Buttons/EqualButton";
import { calculate } from "./utils/calculate";
import ToggleSignButton from "./components/Buttons/ToggleSignButton";
import { changeSign } from "./utils/changeSign";

export const ACTIONS = {
  ADD_DIGITS: "add digits",
  ADD_OPERATION: "add operation",
  CLEAR_ALL: "clear all",
  CALCULATE_VALUE: "calculate value",
  TOGGLE_DIGIT_SIGN: "toggle digit sign"
};

export default function App() {
  // calculator state
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  // app reducer
  function reducer(state, { type, payload }) {
    switch (type) {
      case ACTIONS.ADD_DIGITS:
        if (
          payload.digit === "." &&
          state.currentOperand === (null || undefined) &&
          state.previousOperand === (null || undefined)
        ) {
          return {
            ...state,
            currentOperand: `0${payload.digit}`
          };
        }
        if (
          payload.digit === "." &&
          state.currentOperand === (null || undefined) &&
          state.previousOperand === (!null || !undefined)
        ) {
          debugger;
          return {
            ...state,
            currentOperand: `0${payload.digit}`
          };
        }
        if (payload.digit === "0" && state.currentOperand === "0") {
          return state;
        }
        if (payload.digit === "." && !state.currentOperand) {
          return {
            ...state,
            currentOperand: `0${payload.digit}`
          };
        }
        if (payload.digit === "." && state.currentOperand.includes(".")) {
          return state;
        }
        return {
          ...state,
          currentOperand: `${state.currentOperand || ""}${payload.digit}`
        };
      case ACTIONS.CLEAR_ALL:
        return {};

      case ACTIONS.ADD_OPERATION:
        if (
          state.currentOperand === (null || undefined) &&
          state.previousOperand === (null || undefined)
        ) {
          return state;
        }
        if (state.currentOperand === null) {
          return {
            ...state,
            operation: payload.operator
          };
        }
        if (state.currentOperand.slice(-1) === ".") {
          return {
            ...state,
            previousOperand: state.currentOperand.slice(0, -1),
            currentOperand: null,
            operation: payload.operator
          };
        }
        if (
          state.previousOperand === "" ||
          state.previousOperand === undefined
        ) {
          return {
            ...state,
            previousOperand: state.currentOperand,
            currentOperand: null,
            operation: payload.operator
          };
        }

        return {
          ...state,
          previousOperand: calculate(state),
          operation: payload.operator,
          currentOperand: null
        };
      case ACTIONS.CALCULATE_VALUE:
        return {
          ...state,
          previousOperand: "",
          operation: payload.text,
          currentOperand: calculate(state)
        };
      case ACTIONS.TOGGLE_DIGIT_SIGN:
        if (state.currentOperand) {
          return {
            ...state,
            currentOperand: changeSign(state.currentOperand)
          };
        } else {
          return state;
        }

      default:
        return state;
    }
  }

  return (
    <div className="calculator-box">
      <CalculatorDisplay
        currentOperand={currentOperand}
        previusOperand={previousOperand}
        operation={operation}
      />
      <div className="calculator-buttons-container">
        <ClearButton dispatch={dispatch} text="C" />
        <ToggleSignButton dispatch={dispatch} operator="+-" />
        <OperatorButton dispatch={dispatch} operator="%" />
        <OperatorButton dispatch={dispatch} operator="/" />
        <DigitButton dispatch={dispatch} digit="1" />
        <DigitButton dispatch={dispatch} digit="2" />
        <DigitButton dispatch={dispatch} digit="3" />
        <OperatorButton dispatch={dispatch} operator="X" />
        <DigitButton dispatch={dispatch} digit="4" />
        <DigitButton dispatch={dispatch} digit="5" />
        <DigitButton dispatch={dispatch} digit="6" />
        <OperatorButton dispatch={dispatch} operator="-" />
        <DigitButton dispatch={dispatch} digit="9" />
        <DigitButton dispatch={dispatch} digit="8" />
        <DigitButton dispatch={dispatch} digit="7" />
        <OperatorButton dispatch={dispatch} operator="+" />
        <DigitButton dispatch={dispatch} digit="0" />
        <DigitButton dispatch={dispatch} digit="." />
        <EqualButton dispatch={dispatch} text="=" />
      </div>
    </div>
  );
}
