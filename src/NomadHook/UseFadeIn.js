import React, { useEffect, useRef } from "react";

const useFadinHook = (duration = 1, delay = 0) => {
  if (typeof duration !== "number" || typeof delay !== "number") {
    return;
  }

  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};

const UseFadein = () => {
  const fadeinH1 = useFadinHook(2, 1);
  const fadeinP = useFadinHook(5, 3);

  return (
    <div>
      <h1 {...fadeinH1}>Hello Wolrd</h1>
      <p {...fadeinP}> papapa test </p>
    </div>
  );
};

export default UseFadein;
