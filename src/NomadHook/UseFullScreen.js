import React, { useRef } from "react";

const useFullScreenHook = (fullScreen) => {
  const element = useRef();

  const triggerFullScreen = () => {
    if (element.current) {
      element.current.requestFullscreen();
      if (fullScreen && typeof fullScreen === "function") {
        fullScreen(true);
      }
    }
  };

  const exitFull = () => {
    document.exitFullscreen();
    if (fullScreen && typeof fullScreen === "function") {
      fullScreen(false);
    }
  };

  return { element, triggerFullScreen, exitFull };
};

const UseFullScreen = () => {
  const fullScreen = (fullFlag) => {
    console.log(fullFlag ? "we are full" : "we are samll");
  };

  const { element, triggerFullScreen, exitFull } = useFullScreenHook(
    fullScreen
  );

  return (
    <div>
      <div ref={element}>
        <img src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg" />
        <button onClick={exitFull}> exit Full Screen </button>
      </div>
      <button onClick={triggerFullScreen}> Full Screen </button>
    </div>
  );
};

export default UseFullScreen;
