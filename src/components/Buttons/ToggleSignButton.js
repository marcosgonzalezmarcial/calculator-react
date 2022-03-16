import { ACTIONS } from "../../App";

export default function ToggleSignButton({ dispatch, operator }) {
  return (
    <button onClick={() => dispatch({ type: ACTIONS.TOGGLE_DIGIT_SIGN })}>
      {operator}
    </button>
  );
}
