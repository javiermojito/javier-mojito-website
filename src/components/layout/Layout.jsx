import React from "react";
import CanvasBG from "../canvasBg/CanvasBG";
import Header from "../header/Header";
import Marquee from "react-fast-marquee";

function Layout(props) {
  return (
    <div>
      <Header />
      {props.children}
      <CanvasBG />
      <Marquee
        direction="left"
        className="absolute bottom-6 text-white w-screen h-auto text-sm select-none"
        gradient={false}
        speed={60}
      >
        Life can be tought with wrong decisions. This could be the place where
        words can get some value. I'm always in my way to be diferent, how all
        can be so similar sometimes?
      </Marquee>
    </div>
  );
}

export default Layout;
