import React, { useEffect, useState } from "react";

const useTitleHook = (initTitle) => {
  const [title, setTitle] = useState(initTitle);
  const update = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(update, [title]);
  return setTitle;
};

const UseTitle = () => {
  const titleUpdate = useTitleHook("Loading...");
  setTimeout(() => titleUpdate("Home"), 5000);
  return (
    <div>
      <div>Hello UseTitle Test</div>
    </div>
  );
};

export default UseTitle;
