import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import ZFIcon from "./svgs/ZFIcon";
import TopNavDrop from "./svgs/TopNavDrop";
import BotNavDrop from "./svgs/BotNavDrop";

export const Container: React.FC = ({ children }) => {
  let ax1 = "8%";
  let ax2 = "92%";
  let bx1 = "10%";
  let bx2 = "90%";
  let l1 = "50%";
  let l2 = "50%";

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const [isOpen, setisOpen] = useState(false);

  function handleClick() {
    setisOpen(!isOpen);
  }

  return (
    <div className="bg-white dark:bg-black">
      <div className="flex flex-col font-serif items-center bg-white dark:bg-black">
        <nav className="sticky-nav flex dark:text-white text-3xl font-bold  justify-between max-w-6xl w-full items-start my-2 pt-2 px-4 md:px-8 mx-auto bg-white dark:bg-black">
          <Link href="/">
            <a>
              <ZFIcon />
            </a>
          </Link>
          <div className="midnavdiv px-1.5 md:px-0 flex flex-col items-center text-black dark:text-white">
            <div className="h-5 navtop flex items-center justify-between">
              <svg height="100%" width="100%">
                <line
                  strokeWidth={2}
                  x1={ax1}
                  y1={l1}
                  x2={ax2}
                  y2={l1}
                  stroke="currentColor"
                />
              </svg>
              <button
                className="h-5 w-full md:w-1/3 flex flex-col items-center justify-center focus:outline-none"
                onClick={handleClick}
              >
                <TopNavDrop />
              </button>
              <svg height="100%" width="100%">
                <line
                  strokeWidth={2}
                  x1={ax1}
                  y1={l1}
                  x2={ax2}
                  y2={l1}
                  stroke="currentColor"
                />
              </svg>
            </div>
            <div className={`navmid ${isOpen ? "openedStyle" : "closedStyle"}`}>
              <ul
                className={`flex flex-col ${
                  isOpen ? "block" : "hidden"
                } mt-3 justify-center items-center font-bold`}
              >
                <Link href="/">
                  <a onClick={handleClick} className="pt-5 pb-2">
                    Home
                  </a>
                </Link>
                <Link href="/about">
                  <a onClick={handleClick} className="pb-2">
                    About
                  </a>
                </Link>
                <Link href="/works">
                  <a onClick={handleClick} className="pb-2">
                    Works
                  </a>
                </Link>
              </ul>
            </div>
            <div className="h-3 mb-1 navbot flex items-start justify-center">
              <svg height="100%" width="100%">
                <line
                  strokeWidth={2}
                  x1={ax1}
                  y1={l1}
                  x2={ax2}
                  y2={l1}
                  stroke="currentColor"
                />
              </svg>
              <button
                className="h-3 w-full md:w-1/3 flex flex-col items-center justify-center focus:outline-none"
                onClick={handleClick}
              >
                <BotNavDrop />
              </button>
              <svg height="100%" width="100%">
                <line
                  strokeWidth={2}
                  x1={ax1}
                  y1={l1}
                  x2={ax2}
                  y2={l1}
                  stroke="currentColor"
                />
              </svg>
            </div>
          </div>
          <button
            className="font-bold focus:outline-none"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-2 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                className="h-10 w-10 md:h-14 md:w-14 lg:h-16 lg:w-16 text-gray-800 dark:text-gray-200"
              >
                {theme === "dark" ? (
                  <path strokeWidth={0} d="M2 9A1 1 0 0018 9A1 1 0 002 9" />
                ) : (
                  <path
                    strokeWidth={0}
                    d="M17.4186 12.0186C13.5 18.9 0 12.6 6.8814 1.4814A8.1027 8.1027 86.5943 009.9 17.1a8.1027 8.1027 86.5943 007.5186-5.0814z"
                  />
                )}
              </svg>
            )}
          </button>
        </nav>
        <main className="">{children}</main>
      </div>
    </div>
  );
};
