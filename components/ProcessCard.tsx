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
  let titlebox = useRef(null);
  let textbox = useRef(null);

  const decreaseStep = () => {
    if (step > 0) {
      setStep(step - 1);
      TweenMax.fromTo(
        textbox,
        0.4,
        { opacity: 0 },
        { opacity: 1, ease: Power3.easeOut }
      );
      TweenMax.fromTo(
        titlebox,
        0.4,
        { opacity: 0 },
        { opacity: 1, ease: Power3.easeOut }
      );
    }
  };
  const increaseStep = () => {
    if (step < 3) {
      setStep(step + 1);
      TweenMax.fromTo(
        textbox,
        0.4,
        { opacity: 0 },
        { opacity: 1, ease: Power3.easeOut }
      );
      TweenMax.fromTo(
        titlebox,
        0.4,
        { opacity: 0 },
        { opacity: 1, ease: Power3.easeOut }
      );
    }
  };

  return (
    <section className="ZWhat--Container">
      <div className="ZWhat--Grid">
        <div className="ZWhat--Text--Container">
          <h2 className="ZWhat--Heading">Our Process</h2>
          <p className="ZWhat--Body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <div></div>
        <ZfWhat />
        <div className="ZWhat--Text--Container">
          <div className="flex">
            <button onClick={decreaseStep}>{"<"}</button>
            <h2 className="ZWhat--Heading" ref={(el: any) => (titlebox = el)}>
              {processText[step].title}
            </h2>
            <button onClick={increaseStep}>{">"}</button>
          </div>
          <p className="ZWhat--Body" ref={(el: any) => (textbox = el)}>
            {processText[step].text}
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProcessCard;
