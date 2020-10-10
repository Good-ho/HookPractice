
import React from "react";

const useHookPreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };
  const enablePrvent = () => window.addEventListener("beforeunload", listener);
  const disablePrvent = () =>
    window.removeEventListener("beforeunload", listener);

  return { enablePrvent, disablePrvent };
};

const UsePreventLeave = () => {
  const { enablePrvent, disablePrvent } = useHookPreventLeave();
  return (
    <div>
      <button onClick={enablePrvent}>Protect</button>
      <button onClick={disablePrvent}>UnProtect</button>
    </div>
  );
};

export default UsePreventLeave;
