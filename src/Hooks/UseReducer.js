// Using state

// import React, { useState } from "react";
// const UseReducer = () => {
//   const [counter, setCounter] = useState(0);
//   const decrementClicked = () => {
//     counter > 0 && setCounter(counter - 1);
//   };
//   const incrementClicked = () => {
//     counter < 10 && setCounter(counter + 1);
//   };
//   return (
//     <div>
//       counetr: {counter}
//       <button onClick={incrementClicked}>+</button>
//       <button onClick={decrementClicked}>-</button>
//     </div>
//   );
// };
// export default UseReducer;

// Using useReducer

import React, { useReducer } from "react";

const initialState = 0;

// action - action on button click
const reducer = (state, action) => {
  console.log(state, action);

  //   if (action.type === "increment") {
  //     return state + 1;
  //   }

  //   if (action.type === "decrement") {
  //     return state - 1;
  //   }

  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

const UseReducer = () => {
  // const [count, setCount] = useState(initialState);

  // state - current state
  // dispatch - to trigger the action
  // reducer function - takes state and action and returns new state
  const [state, dispatch] = useReducer(reducer, initialState);

  const decrementClicked = () => {
    state > 0 && dispatch({ type: "decrement" });
  };

  const incrementClicked = () => {
    state < 10 && dispatch({ type: "increment" });
  };

  return (
    <div>
      Count: {state}
      <button onClick={incrementClicked}>+</button>
      <button onClick={decrementClicked}>-</button>
    </div>
  );
};
export default UseReducer;
