import React, { useEffect, useState } from "react";

const UseEffectTest = () => {
  const sayHello = () => console.log("hello");
  const [aNumber, setAnumber] = useState(0);
  const [bNumber, setBnumber] = useState(0);
  // anumber vale change -> useEffect Call.
  useEffect(sayHello, [aNumber]);

  return (
    <div>
      <div>useEffect Test</div>
      <button onClick={() => setAnumber(aNumber + 1)}> {aNumber} </button>
      <button onClick={() => setBnumber(bNumber + 1)}> {bNumber} </button>
    </div>
  );
};

export default UseEffectTest;
