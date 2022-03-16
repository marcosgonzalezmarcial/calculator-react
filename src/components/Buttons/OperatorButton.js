import { ACTIONS } from "../../App";

export default function OperatorButton({ operator, dispatch }) {
  return (
    <button
      onClick={() =>
        dispatch({ type: ACTIONS.ADD_OPERATION, payload: { operator } })
      }
    >
      {operator}
    </button>
  );
}
