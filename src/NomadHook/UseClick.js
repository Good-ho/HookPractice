import React, { useEffect, useRef } from "react";

const hookClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    console.log("useEffect");
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};

const UserClick = () => {
  const sayHello = () => {
    console.log("say hello");
  };
  const title = hookClick(sayHello);

  return (
    <div>
      <h1 ref={title}>User Click Test2 </h1>
    </div>
  );
};

export default UserClick;
