import React from "react";
import CanvasBG from "../canvasBg/CanvasBG";
import Header from "../header/Header";
import Marquee from "react-fast-marquee";

const thoughts = [
  "Life can be tought with wrong decisions",
  "This could be the place where words can get some value",
  "I'm always in my way to be diferent, how all can result so similar sometimes?",
  "Sewerslvt is a very underrated artist",
  "Did you know that Akira is the most expensive animation film of all time?",
  "Scott Pilgrim vs. The World is very accurate, it came out in the wrong year",
  "... Wait, you still reading this?",
  "My Social-o-Meter goes to 0 in about 2.7 hours. Don't make me stay longer than that pls",
];

function Layout(props) {
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

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
        loop={0}
      >
        {thoughts
          ? shuffle(thoughts).map((message, index) => {
              return (
                <span className="pl-96 ml-96" key={index}>
                  {message}
                </span>
              );
            })
          : null}
        {/*   */}
      </Marquee>
    </div>
  );
}

export default Layout;
