import { ACTIONS } from "../../App";

export default function ClearButton({ dispatch, text }) {
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.CLEAR_ALL })}
      className="cButtunStyles"
    >
      {text}
    </button>
  );
}
