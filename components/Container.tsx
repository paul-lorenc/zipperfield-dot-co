import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

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
    <div className="flex flex-col h-screen font-serif items-center bg-white dark:bg-black">
      <nav className="sticky-nav flex dark:text-white text-3xl font-bold  justify-between max-w-6xl w-full items-start my-2 pt-2 px-8 md:my-4 mx-auto bg-white dark:bg-black">
        <Link href="/">
          <a className="min-w-10 h-10">Zf</a>
        </Link>
        <div className="z-20 flex flex-col items-center w-2/3">
          <div className="h-3 navtop flex items-center justify-between">
            <svg height="100%" width="100%">
              <line x1={ax1} y1={l1} x2={ax2} y2={l1} stroke="currentColor" />
            </svg>
            <button
              className="h-3 w-full flex flex-col items-center justify-center text-black dark:text-white"
              onClick={handleClick}
            >
              <svg height="100%" width="20%">
                <line x1={ax1} y1={l1} x2={ax2} y2={l1} stroke="currentColor" />
              </svg>
              <svg className="h-1" height="100%" width="40%">
                <line x1={ax1} y1="3%" x2={ax2} y2="3%" stroke="currentColor" />
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
              } mt-10 max-w-2xl justify-center items-center font-thin`}
            >
              <Link href="/">
                <a onClick={handleClick} className="pt-7 pb-2">
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
          <div className="h-1 navbot flex items-start justify-center">
            <svg height="100%" width="100%">
              <line x1={ax1} y1={l1} x2={ax2} y2={l1} stroke="currentColor" />
            </svg>
            <button
              className="h-1 w-full flex flex-col items-center"
              onClick={handleClick}
            >
              <svg height="100%" width="20%">
                <line x1={ax1} y1={l1} x2={ax2} y2={l1} stroke="currentColor" />
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
          Zf
        </button>
      </nav>
      <main className="flex flex-col items-center position-absolute">
        {children}
      </main>
    </div>
  );
};
