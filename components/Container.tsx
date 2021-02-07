import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import ZFIcon from "./svgs/ZFIcon";
import { gsap, TweenMax, Power3 } from "gsap";
import Hamburg from "./svgs/Hamburg";
import Close from "./svgs/Close";

export const Container: React.FC = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isOpen, setisOpen] = useState(false);
  let menuRef: any = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleOpen = () => {
    TweenMax.fromTo(
      menuRef,
      0.6,
      { scaleY: 0, opacity: 0 },
      { scaleY: 1, opacity: 1 }
    );
    setisOpen(true);
  };

  const handleClose = () => {
    TweenMax.to(menuRef, 0.6, { scaleY: 0, opacity: 0 });
    setisOpen(false);
  };

  return (
    <div className=" bg-white dark:bg-black">
      <div
        className="
        flex flex-col font-sans items-center transition-colors duration-1000 bg-white dark:bg-black"
      >
        {mounted && (
          <nav
            className={`${
              theme === "dark" ? "bg-black" : "bg-white"
            } flex bg-opacity-60 z-20 sticky-nav bg-blur w-full text-black dark:text-white justify-between px-4 md:px-12 py-2 md:py-4 items-center`}
          >
            <Link href="/">
              <a className="focus:outline-none">
                <ZFIcon />
              </a>
            </Link>
            <button
              className="text-black dark:text-white font-bold focus:outline-none"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {mounted && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 152.39398 152.26898"
                  fill="currentColor"
                  stroke="currentColor"
                  className="h-10 w-10 md:h-14 md:w-14 text-gray-800 dark:text-gray-200"
                >
                  {theme === "dark" ? (
                    <g>
                      <path
                        d="M39.67,96.75A55.99345,55.99345,0,0,1,93.41,40.8,45.82508,45.82508,0,0,0,72.3,46.99c-.12.07-.23.13-.34.2C58.51,54.94,48.79,69.03,48.25,85.75,47.11,120.22,65.9,142.53,99,142.53c27.89,0,48.43-13.2,52.08-37.71A55.99784,55.99784,0,0,1,39.67,96.75Z"
                        transform="translate(-21 -22)"
                        style={{
                          fill: "#fff",
                        }}
                      />
                      <path
                        d="M48.25,85.75c.54-16.72,10.26-30.81,23.71-38.56A42.96948,42.96948,0,0,0,51.01,83.05c-1.15,34.47,19.17,57.07,52.26,57.07,29.86,0,47.28-17.91,48.34-41.11,0,.21-.01.42-.02.62-.03.48-.06.95-.09,1.43-.07.94-.17,1.87-.29,2.8-.04.32-.08.65-.13.96-3.65,24.51-24.19,37.71-52.08,37.71C65.9,142.53,47.11,120.22,48.25,85.75Z"
                        transform="translate(-21 -22)"
                        style={{
                          fill: "#e6e7e8",
                        }}
                      />
                    </g>
                  ) : (
                    <g>
                      <path
                        d="M171.94629,95.766H150.82547V85.0401S158.08013,95.766,171.94629,95.766Z"
                        transform="translate(-19.80231 -19.97307)"
                        style={{
                          fill: "#231f20",
                        }}
                      />
                      <path
                        d="M149.69991,42.06069l-14.935,14.935-7.57625-7.57626S139.89145,51.86915,149.69991,42.06069Z"
                        transform="translate(-19.80231 -19.97307)"
                        style={{
                          fill: "#231f20",
                        }}
                      />
                      <path
                        d="M149.69991,149.74566l-14.935-14.935,7.58571-7.57626S139.89145,139.9372,149.69991,149.74566Z"
                        transform="translate(-19.80231 -19.97307)"
                        style={{
                          fill: "#231f20",
                        }}
                      />
                      <path
                        d="M147.47716,95.766H96.004v-.00946l36.39629-36.38683A51.30273,51.30273,0,0,1,147.47716,95.766Z"
                        transform="translate(-19.80231 -19.97307)"
                        style={{
                          fill: "#231f20",
                        }}
                      />
                      <path
                        d="M96.004,95.766h51.47313a51.30661,51.30661,0,0,1-15.21872,36.53817L96.004,96.04978Z"
                        transform="translate(-19.80231 -19.97307)"
                        style={{
                          fill: "#231f20",
                        }}
                      />
                      <path
                        d="M132.40032,59.36974,96.004,95.75657V44.2929A51.30273,51.30273,0,0,1,132.40032,59.36974Z"
                        transform="translate(-19.80231 -19.97307)"
                        style={{
                          fill: "#231f20",
                        }}
                      />
                      <path
                        d="M96.004,96.04978l36.25441,36.25442a51.31844,51.31844,0,0,1-36.25441,14.935Z"
                        transform="translate(-19.80231 -19.97307)"
                        style={{
                          fill: "#231f20",
                        }}
                      />
                      <path
                        d="M96.004,150.87122H106.7205S96.004,158.12589,96.004,171.992Z"
                        transform="translate(-19.80231 -19.97307)"
                        style={{
                          fill: "#231f20",
                        }}
                      />
                      <path
                        d="M96.004,96.04978v51.18938a51.325,51.325,0,0,1-36.40575-15.07684L95.86215,95.90791Z"
                        transform="translate(-19.80231 -19.97307)"
                        style={{
                          fill: "#231f20",
                        }}
                      />
                      <polygon
                        points="76.202 75.793 76.202 76.077 76.06 75.935 76.202 75.793"
                        style={{
                          fill: "#231f20",
                        }}
                      />
                      <path
                        d="M96.004,44.2929V95.766h-.28376L59.46586,59.51162A51.29,51.29,0,0,1,96.004,44.2929Z"
                        transform="translate(-19.80231 -19.97307)"
                        style={{
                          fill: "#231f20",
                        }}
                      />
                      <path
                        d="M96.004,20.09807V41.21889H85.27809S96.004,33.97368,96.004,20.09807Z"
                        transform="translate(-19.80231 -19.97307)"
                        style={{
                          fill: "#231f20",
                        }}
                      />
                      <polygon
                        points="76.202 75.793 76.06 75.935 75.918 75.793 76.202 75.793"
                        style={{
                          fill: "#231f20",
                        }}
                      />
                      <path
                        d="M95.86215,95.90791,59.59828,132.16232A51.30273,51.30273,0,0,1,44.52144,95.766H95.72027Z"
                        transform="translate(-19.80231 -19.97307)"
                        style={{
                          fill: "#231f20",
                        }}
                      />
                      <path
                        d="M95.72027,95.766H44.52144A51.28679,51.28679,0,0,1,59.46586,59.51162Z"
                        transform="translate(-19.80231 -19.97307)"
                        style={{
                          fill: "#231f20",
                        }}
                      />
                      <path
                        d="M57.23365,134.52694l7.57626,7.58572s-12.70276-2.45921-22.51122,7.35871Z"
                        transform="translate(-19.80231 -19.97307)"
                        style={{
                          fill: "#231f20",
                        }}
                      />
                      <path
                        d="M57.23365,57.27941,49.6574,64.85567s2.44975-12.70276-7.35871-22.51122Z"
                        transform="translate(-19.80231 -19.97307)"
                        style={{
                          fill: "#231f20",
                        }}
                      />
                      <path
                        d="M41.17313,95.766V106.4825S33.92792,95.766,20.05231,95.766Z"
                        transform="translate(-19.80231 -19.97307)"
                        style={{
                          fill: "#231f20",
                        }}
                      />
                      <path
                        d="M44.52144,95.766a51.47555,51.47555,0,1,1,15.07684,36.39629A51.28679,51.28679,0,0,1,44.52144,95.766Z"
                        transform="translate(-19.80231 -19.97307)"
                        style={{
                          fill: "none",
                          stroke: "#231f20",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "0.25px",
                        }}
                      />
                      <polyline
                        points="76.202 75.793 76.202 76.077 76.202 127.266 76.202 130.898 76.202 152.019"
                        style={{
                          fill: "none",
                          stroke: "#231f20",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "0.25px",
                        }}
                      />
                      <path
                        d="M85.27809,41.21889S96.004,33.97368,96.004,20.09807v75.6585"
                        transform="translate(-19.80231 -19.97307)"
                        style={{
                          fill: "none",
                          stroke: "#231f20",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "0.25px",
                        }}
                      />
                      <line
                        x1={65.47578}
                        y1={21.24582}
                        x2={76.20172}
                        y2={21.24582}
                        style={{
                          fill: "none",
                          stroke: "#231f20",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "0.25px",
                        }}
                      />
                      <path
                        d="M106.7205,150.87122S96.004,158.12589,96.004,171.992"
                        transform="translate(-19.80231 -19.97307)"
                        style={{
                          fill: "none",
                          stroke: "#231f20",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "0.5px",
                        }}
                      />
                      <line
                        x1={86.91819}
                        y1={130.89816}
                        x2={76.20172}
                        y2={130.89816}
                        style={{
                          fill: "none",
                          stroke: "#231f20",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "0.5px",
                        }}
                      />
                      <path
                        d="M49.6574,64.85567s2.44975-12.70276-7.35871-22.51122l14.935,14.935,2.23221,2.23221L95.72027,95.766l.14188.14188.14188.14187,36.25441,36.25442,2.5065,2.5065,14.935,14.935"
                        transform="translate(-19.80231 -19.97307)"
                        style={{
                          fill: "none",
                          stroke: "#231f20",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "0.5px",
                        }}
                      />
                      <line
                        x1={29.85509}
                        y1={44.8826}
                        x2={37.43135}
                        y2={37.30635}
                        style={{
                          fill: "none",
                          stroke: "#231f20",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "0.5px",
                        }}
                      />
                      <path
                        d="M142.35065,127.23444s-2.4592,12.70276,7.34926,22.51122"
                        transform="translate(-19.80231 -19.97307)"
                        style={{
                          fill: "none",
                          stroke: "#231f20",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "0.5px",
                        }}
                      />
                      <line
                        x1={122.54835}
                        y1={107.26138}
                        x2={114.96263}
                        y2={114.83763}
                        style={{
                          fill: "none",
                          stroke: "#231f20",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "0.5px",
                        }}
                      />
                      <path
                        d="M41.17313,106.4825S33.92792,95.766,20.05231,95.766h151.894"
                        transform="translate(-19.80231 -19.97307)"
                        style={{
                          fill: "none",
                          stroke: "#231f20",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "0.5px",
                        }}
                      />
                      <line
                        x1={21.37082}
                        y1={86.50944}
                        x2={21.37082}
                        y2={75.79296}
                        style={{
                          fill: "none",
                          stroke: "#231f20",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "0.5px",
                        }}
                      />
                      <path
                        d="M150.82547,85.0401S158.08013,95.766,171.94629,95.766"
                        transform="translate(-19.80231 -19.97307)"
                        style={{
                          fill: "none",
                          stroke: "#231f20",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "0.5px",
                        }}
                      />
                      <line
                        x1={131.02316}
                        y1={65.06703}
                        x2={131.02316}
                        y2={75.79296}
                        style={{
                          fill: "none",
                          stroke: "#231f20",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "0.5px",
                        }}
                      />
                      <path
                        d="M64.80991,142.11266s-12.70276-2.45921-22.51122,7.35871l14.935-14.94443,2.36463-2.36462L95.86215,95.90791,96.004,95.766v-.00946l36.39629-36.38683,2.36462-2.37408,14.935-14.935"
                        transform="translate(-19.80231 -19.97307)"
                        style={{
                          fill: "none",
                          stroke: "#231f20",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "0.5px",
                        }}
                      />
                      <line
                        x1={45.0076}
                        y1={122.13959}
                        x2={37.43135}
                        y2={114.55388}
                        style={{
                          fill: "none",
                          stroke: "#231f20",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "0.5px",
                        }}
                      />
                      <path
                        d="M127.18869,49.4194s12.70276,2.44975,22.51122-7.35871"
                        transform="translate(-19.80231 -19.97307)"
                        style={{
                          fill: "none",
                          stroke: "#231f20",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "0.5px",
                        }}
                      />
                      <line
                        x1={107.38638}
                        y1={29.44634}
                        x2={114.96263}
                        y2={37.02259}
                        style={{
                          fill: "none",
                          stroke: "#231f20",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "0.5px",
                        }}
                      />
                    </g>
                  )}
                </svg>
              )}
            </button>
            <button
              onClick={isOpen ? handleClose : handleOpen}
              className="text-3xl focus:outline-none"
            >
              <a>{isOpen ? <Close /> : <Hamburg />}</a>
            </button>
          </nav>
        )}
        {mounted && (
          <div
            ref={(el) => {
              menuRef = el;
            }}
            className={` ${
              theme === "dark" ? "bg-black" : "bg-white"
            } opacity-0 z-10 fadein origin-top-right flex flex-col right-0 md:right-2 w-20 md:w-28 fixed overflow-hidden pl-2 text-black dark:text-white bg-opacity-60 bg-blur`}
          >
            <ul className="flex flex-col mt-14 md:mt-16 lg:mt-20 justify-center items-left text-sm md:text-xl space-y-2 md:space-y-3">
              <Link href="/">
                <a className="pt-3 pb-2">Home</a>
              </Link>
              <Link href="/about">
                <a className="pb-2">About</a>
              </Link>
              <Link href="/works">
                <a className="pb-2">Works</a>
              </Link>
              <Link href="/contact">
                <a className="pb-2">Contact</a>
              </Link>
            </ul>
          </div>
        )}
        <main className="flex flex-col justify-center items-center w-full">
          {children}
        </main>
      </div>
    </div>
  );
};
