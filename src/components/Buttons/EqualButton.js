import { ACTIONS } from "../../App";

export default function EqualButton({ dispatch, text }) {
  return (
    <button
      className="equal-button"
      onClick={() =>
        dispatch({ type: ACTIONS.CALCULATE_VALUE, payload: { text } })
      }
    >
      {text}
    </button>
  );
}
