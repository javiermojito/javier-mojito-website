import React from "react";
import Script from "next/script";

export default function CanvasBG() {
  const scenes = [
    "scene.json",
    "scene1.json",
    "scene2.json",
    "scene3.json",
    "scene4.json",
  ];

  const getRandomNumber = () => {
    const min = 0;
    const max = scenes.length;
    return Math.floor(Math.random() * (max - min) + min);
  };

  const getRandomScene = () => {
    return scenes[getRandomNumber()];
  };

  return (
    <>
      <Script
        src="runtime.js"
        onLoad={() => {
          const app = new SpeRuntime.Application();
          if (window.innerWidth >= 500) {
            app.start(getRandomScene());
            const loop = () => {
              // Keep looping if scene isn't init
              if (!app._scene) return requestAnimationFrame(loop);

              // Otherwise, handle load here
              console.log("loaded");
            };
            loop();
          }
        }}
      ></Script>
      <canvas id="canvas3d"></canvas>
    </>
  );
}
