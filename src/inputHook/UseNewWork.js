import React, { useEffect, useState } from "react";

const useNetworkHook = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }

    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);

    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return status;
};

const UseNewWork = () => {
  const handleNetworkChange = (onLine) => {
    console.log(onLine ? "we just went online" : "we are offline");
  };
  const onLine = useNetworkHook(handleNetworkChange);
  return (
    <div>
      <h1> {onLine ? "Online" : "offLine"} </h1>
    </div>
  );
};

export default UseNewWork;
