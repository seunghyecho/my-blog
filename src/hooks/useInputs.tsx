import React, { useReducer } from "react";

// reducer 커스텀 hooks
function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

export default function useInputs(initialForm) {
  const [state, dispatch] = useReducer(reducer, initialForm);
  const onChange = (e: React.ChangeEvent) => {
    dispatch(e.target);
  };
  return [state, onChange];
}
