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
    title: "Iteration",
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
  let p1 = useRef(null);
  let p2 = useRef(null);

  const decreaseStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };
  const increaseStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  return (
    <section className="ZProcess--Container">
      <div className="ZProcess--Grid">
        <div className="ZProcess--Mobile--Header">
          <h2 className="ZProcess--Heading">Our Process</h2>
          <p className="ZProcess--Body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <ZfWhat />
        <div>
          <div className="ZProcess--Header">
            <h2 className="ZProcess--Heading">Our Process</h2>
            <p className="ZProcess--Body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <div className="ZProcess--Desktop--Buttons">
            <button onClick={() => setStep(0)} className="ZProcess--Dt-Button">
              Onboarding
            </button>
            <button onClick={() => setStep(1)} className="ZProcess--Dt-Button">
              Concept Art
            </button>
            <button onClick={() => setStep(2)} className="ZProcess--Dt-Button">
              Iteration
            </button>
            <button onClick={() => setStep(3)} className="ZProcess--Dt-Button">
              Handoff
            </button>
          </div>
          <div className="ZProcess--Carousel--Container">
            <div className="ZProcess--Carousel">
              <div className="ZP--Carousel--Card">
                <div className="ZP--CardWrap">
                  <h2 className="ZProcess--Heading">{processText[0].title}</h2>
                  <p className="ZProcess--Body">{processText[0].text}</p>
                </div>
              </div>
              <div className="ZP--Carousel--Card">
                <div className="ZP--CardWrap">
                  <h2 className="ZProcess--Heading">{processText[1].title}</h2>
                  <p className="ZProcess--Body">{processText[1].text}</p>
                </div>
              </div>
              <div className="ZP--Carousel--Card">
                <div className="ZP--CardWrap">
                  <h2 className="ZProcess--Heading">{processText[2].title}</h2>
                  <p className="ZProcess--Body">{processText[2].text}</p>
                </div>
              </div>
              <div className="ZP--Carousel--Card">
                <div className="ZP--CardWrap">
                  <h2 className="ZProcess--Heading">{processText[3].title}</h2>
                  <p className="ZProcess--Body">{processText[3].text}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessCard;