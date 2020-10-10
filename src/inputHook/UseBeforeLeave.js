import React, { useEffect } from "react";


// 1. 현재 창을 나갈때 주로 사용. 예를 들어  마우스 포커스가 현재 창 벗어날때
// 즉, 마우스가 창을 벗어날때 특정 이벤트 실행할 수 있음.
// 아래 code를 보면 useEffect에서 return 값을 통해 unmount될때 이벤트 remove하고, 
// componentDidmouunt시에만 한번 이벤트가 등록될 수 있도록, [] 인자 추가됨.
const useBeforeLeaveHook = (callback) => {
  if (typeof callback !== "function") {
    return;
  }

  const handle = (event) => {
    // console.log(event);
    // 위 로그 찍어보면 clientY가 보임.
    // clientY가 마우스를 y값 의미.
    // 따라서 y값을 조절해야 원하는 동작을 할 수 있음.
    const { clientY } = event;
    if (clientY <= 0) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

const UseBeforeLeave = () => {
  const beforeLife = () => console.log("plz don't leave");
  useBeforeLeaveHook(beforeLife);
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

export default UseBeforeLeave;
