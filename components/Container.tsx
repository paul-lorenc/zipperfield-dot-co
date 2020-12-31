import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import ZFIcon from "./svgs/ZFIcon";

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
          <div className="z-20 flex flex-col items-center w-2/3 text-black dark:text-white">
            <div className="h-3 navtop flex items-center justify-between">
              <svg height="100%" width="100%">
                <line x1={ax1} y1={l1} x2={ax2} y2={l1} stroke="currentColor" />
              </svg>
              <button
                className="h-3 w-full flex flex-col items-center justify-center"
                onClick={handleClick}
              >
                <svg height="100%" width="20%">
                  <line
                    x1={ax1}
                    y1={l1}
                    x2={ax2}
                    y2={l1}
                    stroke="currentColor"
                  />
                </svg>
                <svg className="h-1" height="100%" width="40%">
                  <line
                    x1={ax1}
                    y1="3%"
                    x2={ax2}
                    y2="3%"
                    stroke="currentColor"
                  />
                </svg>
              </button>
              <svg height="100%" width="100%">
                <line x1={ax1} y1={l1} x2={ax2} y2={l1} stroke="currentColor" />
              </svg>
            </div>
            <div className={`navmid ${isOpen ? "openedStyle" : "closedStyle"}`}>
              <ul
                className={`flex flex-col ${
                  isOpen ? "block" : "hidden"
                } mt-3 max-w-2xl justify-center items-center font-bold`}
              >
                <Link href="/">
                  <a onClick={handleClick} className="pt-5 pb-2">
                    home
                  </a>
                </Link>
                <Link href="/about">
                  <a onClick={handleClick} className="pb-2">
                    about
                  </a>
                </Link>
                <Link href="/works">
                  <a onClick={handleClick} className="pb-2">
                    works
                  </a>
                </Link>
              </ul>
            </div>
            <div className="h-3 navbot flex items-start justify-center">
              <svg height="100%" width="100%">
                <line x1={ax1} y1={l1} x2={ax2} y2={l1} stroke="currentColor" />
              </svg>
              <button
                className="h-4 w-full flex flex-col items-center"
                onClick={handleClick}
              >
                <svg height="100%" width="20%">
                  <line
                    x1={ax1}
                    y1={l1}
                    x2={ax2}
                    y2={l1}
                    stroke="currentColor"
                  />
                </svg>
              </button>
              <svg height="100%" width="100%">
                <line x1={ax1} y1={l1} x2={ax2} y2={l1} stroke="currentColor" />
              </svg>
            </div>
          </div>
          <button
            className="w-10 h-10 font-bold"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                className="h-10 w-10 text-gray-800 dark:text-gray-200"
              >
                {theme === "dark" ? (
                  <path strokeWidth={0} d="M3 9A1 1 0 0019 9A1 1 0 003 9" />
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
        <main className="flex flex-col items-center position-absolute">
          {children}
        </main>
      </div>
    </div>
  );
};
