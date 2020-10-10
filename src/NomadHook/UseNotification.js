import React from "react";

const useNotificationHook = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotification = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };

  return fireNotification;
};

const UseNotification = () => {
  const trigger = useNotificationHook("Hello world", { body: "I'm body" });
  return (
    <div>
      <button onClick={trigger}> Button </button>
    </div>
  );
};

export default UseNotification;
