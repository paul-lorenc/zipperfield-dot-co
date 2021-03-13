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
  const [scrollProgress, setScrollProgress] = useState(0);
  let target: any = useRef(null);
  let p0: any = useRef(null);
  let p1: any = useRef(null);
  let p2: any = useRef(null);
  let p3: any = useRef(null);

  const scrollListener = () => {
    if (!target.current) {
      return;
    }

    const element: any = target.current;
    const windowScroll = element.scrollLeft; // Distance of the scrollbar from the leftmost point
    const totalWidth = element.scrollWidth - element.clientWidth; // Total width the scrollbar can traverse
    if (windowScroll === 0) {
      return setStep(0);
    }

    if (windowScroll > totalWidth) {
      return setStep(3);
    }

    let scrollPer: number = (windowScroll / totalWidth) * 100;

    let step = 0;

    if (scrollPer > 16) {
      step = 1;
    }

    if (scrollPer > 50) {
      step = 2;
    }

    if (scrollPer > 78) {
      step = 3;
    }
    console.log(step);
    setStep(step);
  };

  useEffect((): any => {
    //@ts-ignore
    target.current.addEventListener("scroll", scrollListener);
    return () =>
      target &&
      //@ts-ignore
      target.current.removeEventListener("scroll", scrollListener);
  });

  const p0Scroll = () => {
    setStep(0);
  };

  const p1Scroll = () => {
    setStep(1);
  };

  const p2Scroll = () => {
    setStep(2);
  };

  const p3Scroll = () => {
    setStep(3);
  };

  return (
    <section className="ZProcess--Container">
      <div className="ZProcess--Grid">
        <div className="ZProcess--Mobile--Header">
          <h2 className="ZProcess--Heading">Our Process</h2>
          <p className="ZProcess--Body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt.
          </p>
        </div>
        <ZfWhat />
        <div className="ZProcess--Desktop--Body">
          <div className="ZProcess--Header">
            <h2 className="ZProcess--Heading">Our Process</h2>
            <p className="ZProcess--Body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt
            </p>
          </div>
          <div className="ZProcess--Desktop--Buttons">
            <button onClick={p0Scroll} className="ZProcess--Dt-Button">
              Onboarding
            </button>
            <button onClick={p1Scroll} className="ZProcess--Dt-Button">
              Concept Art
            </button>
            <button onClick={p2Scroll} className="ZProcess--Dt-Button">
              Iteration
            </button>
            <button onClick={p3Scroll} className="ZProcess--Dt-Button">
              Handoff
            </button>
          </div>
          <h2 className="ZProcess--Heading">{processText[step].title}</h2>
          <p className="ZProcess--Body">{processText[step].text}</p>
        </div>
        <div className="ZProcess--Mobile--Wrapper">
          <div className="ZProcess--Carousel--Container">
            <div className="ZProcess--Carousel" ref={target}>
              <div className="ZP--Carousel--Card" ref={p0}>
                <div className="ZP--CardWrap">
                  <h2 className="ZProcess--Heading">{processText[0].title}</h2>
                  <p className="ZProcess--Body">{processText[0].text}</p>
                </div>
              </div>
              <div className="ZP--Carousel--Card" ref={p1}>
                <div className="ZP--CardWrap">
                  <h2 className="ZProcess--Heading">{processText[1].title}</h2>
                  <p className="ZProcess--Body">{processText[1].text}</p>
                </div>
              </div>
              <div className="ZP--Carousel--Card" ref={p2}>
                <div className="ZP--CardWrap">
                  <h2 className="ZProcess--Heading">{processText[2].title}</h2>
                  <p className="ZProcess--Body">{processText[2].text}</p>
                </div>
              </div>
              <div className="ZP--Carousel--Card" ref={p3}>
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
