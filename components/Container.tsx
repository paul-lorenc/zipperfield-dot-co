import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export const Container: React.FC = ({ children }) => {
  let ax1 = "8%";
  let ax2 = "92%";
  let bx1 = "10%";
  let bx2 = "90%";
  let l1 = 19;
  let l2 = 23;

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const [isOpen, setisOpen] = useState(false);

  function handleClick() {
    setisOpen(!isOpen);
  }

  return (
    <div className="flex flex-col h-screen font-serif items-center bg-white dark:bg-black">
      <nav className="sticky-nav flex dark:text-white text-3xl font-bold justify-between max-w-6xl w-full items-start my-2 pt-2 px-8 md:my-4 mx-auto bg-white dark:bg-black">
        <Link href="/">
          <a className="min-w-10 h-10">Zf</a>
        </Link>
        <div className="z-20 flex flex-col items-center">
          <div className="h-3 navtop flex items-start justify-center">
            <svg height="20" width="50%">
              <line x1={ax1} y1={l1} x2={ax2} y2={l1} stroke="currentColor" />
            </svg>
            <button className="font-extrabold" onClick={handleClick}>
              -
            </button>
            <svg height="20" width="50%">
              <line x1={ax1} y1={l1} x2={ax2} y2={l1} stroke="currentColor" />
            </svg>
          </div>
          <div
            className={`navmid ${isOpen ? "openedStyle" : "closedStyle"}`}
          ></div>
          <div className="navbot flex items-start justify-center">
            <svg height="20" width="50%">
              <line x1={ax1} y1={l1} x2={ax2} y2={l1} stroke="currentColor" />
            </svg>
            <button className="font-extrabold " onClick={handleClick}>
              -
            </button>
            <svg height="20" width="50%">
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
