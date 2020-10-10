import React, { useEffect, useState } from "react";

const useScrollHook = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0
  });

  const onScroll = () => {
    setState({ x: window.scrollX, y: window.scrollY });
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    // return window.removeEventListener("wheel", onScroll);
  }, []);

  return state;
};

const UseScroll = () => {
  const { y } = useScrollHook();

  return (
    <div style={{ height: "1000vh" }}>
      <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>
        Hello World
      </h1>
    </div>
  );
};

export default UseScroll;
