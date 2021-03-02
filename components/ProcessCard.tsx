import ZfWhat from "@/components/svgs/ZfWhat";
import { useEffect, useRef, useState } from "react";
import { TweenMax, Power3 } from "gsap";

const processText = [
  {
    title: "Onboarding",
    text:
      "Quis commodo odio aenean sed adipiscing diam donec adipiscing. Accumsan sit amet nulla facilisi morbi tempus iaculis. Massa massa ultricies mi quis. Molestie at elementum eu facilisis sed odio morbi quis. ",
  },
  {
    title: "Concept Art",
    text:
      "Dui nunc mattis enim ut tellus elementum sagittis vitae et. Malesuada fames ac turpis egestas. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Quisque egestas diam in arcu cursus. In nibh mauris cursus mattis molestie a.",
  },
  {
    title: "Iterating",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi sit amet mauris commodo. Lacus vestibulum sed arcu non odio euismod. Purus faucibus ornare suspendisse sed.",
  },
  {
    title: "Handoff",
    text:
      "Odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Quisque egestas diam in arcu cursus. In nibh mauris cursus mattis molestie a. Praesent tristique magna sit amet purus gravida.",
  },
];

function ProcessCard() {
  const [step, setStep] = useState(0);

  const decreaseStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };
  const increaseStep = () => {
    if (step == 3) {
      setStep(0);
      return;
    }
    if (step < 3) {
      setStep(step + 1);
    }
  };

  return (
    <>
      <div className="ZWhat">
        <ZfWhat />
      </div>
      <div className="ZWhat--Text--Container">
        <div className="flex">
          <h2 className="ZWhat--Heading">{processText[step].title}</h2>
          <div className="fred">
            <button onClick={decreaseStep}>{"<"}</button>
            <button onClick={increaseStep}>{">"}</button>
          </div>
        </div>
        <p className="ZWhat--Body">{processText[step].text}</p>
      </div>
    </>
  );
}

export default ProcessCard;
