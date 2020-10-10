import React, { useState } from "react";

const useInput = (initValue, validator) => {
  const [value, setValue] = useState(initValue);
  const onChange = (e) => {
    const {
      target: { value }
    } = e;
    let willUpdate = true;

    if (typeof validator === "function") {
      willUpdate = validator(value);
    }

    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

const UseInputHook = () => {
  const maxLen = (value) => value.length < 10;
  const name = useInput("Mr", maxLen);

  return (
    <div>
      <h1> Hello World22 </h1>
      <input placeholder="Name Input" {...name} />
    </div>
  );
};

export default UseInputHook;
