import React from "react";

const useHookConfirm = (message = "", callback, cancelCallback) => {
  if (typeof callback !== "function" || typeof cancelCallback !== "function") {
    return;
  }

  const confirmAction = () => {
    if (confirm(message)) {
      callback();
    } else {
      cancelCallback();
    }
  };

  return confirmAction;
};

const UseConfirm = () => {
  const deleteWorld = () => console.log("Delete world");
  const cancelWorld = () => console.log("Cancel Delete World");
  const confirmDelete = useHookConfirm(
    "Are you sure?",
    deleteWorld,
    cancelWorld
  );
  return (
    <div>
      <button onClick={confirmDelete}> Delete the world </button>
    </div>
  );
};

export default UseConfirm;
