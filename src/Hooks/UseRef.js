import React, { useRef, useState } from "react";

const UseRef = () => {
  const [showName, setShowName] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const inputRef = useRef(null);

  const onBtnClick = () => {
    inputRef.current.focus(); // focuses the input after button click

    // console.log(event.target.value); OR onchange((event) => {event.target.value})
    console.log("i", inputRef.current.value); // gets the value of the input

    // inputRef.current.value = ""; // clears the input field after button click

    setShowName(true);
  };

  // react set its state after evaluating other code so they cannot be immediately used

  return (
    <>
      {showName === false ? (
        <div>
          <input
            type="text"
            placeholder="Enter your name"
            ref={inputRef}
            onChange={(event) =>
              event.target.value === "" ? setDisabled(true) : setDisabled(false)
            }
          />
          <button onClick={onBtnClick} disabled={disabled}>
            Click here
          </button>
        </div>
      ) : (
        <div>Hello {inputRef.current.value}</div>
      )}
    </>
  );
};

export default UseRef;
