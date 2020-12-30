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
    <div className="transition duration-1000 ease-out flex flex-col font-serif bg-white dark:bg-black">
      <nav className="transition duration-1000 ease-out sticky-nav flex dark:text-white text-3xl font-bold justify-between max-w-6xl w-full items-start my-2 pt-2 px-8 md:my-4 mx-auto bg-white dark:bg-black">
        <Link href="/">
          <a className="min-w-10 h-10">Zf</a>
        </Link>
        <div className="z-20 flex flex-col items-center">
          <ul
            className={`flex ${
              isOpen ? "block h-10" : "hidden"
            } max-w-2xl justify-center items-center`}
          >
            <a>hello</a>
          </ul>
          <div className="flex items-center justify-center">
            <svg height="40" width="40%">
              <line x1={ax1} y1={l1} x2={ax2} y2={l1} stroke="currentColor" />
              <line x1={ax1} y1={l1} x2={bx1} y2={l2} stroke="currentColor" />
              <line x1={bx1} y1={l2} x2={bx2} y2={l2} stroke="currentColor" />
              <line x1={ax2} y1={l1} x2={bx2} y2={l2} stroke="currentColor" />
            </svg>
            <button className="w-10 h-10" onClick={handleClick}>
              (--)
            </button>
            <svg height="40" width="40%">
              <line x1={ax1} y1={l1} x2={ax2} y2={l1} stroke="currentColor" />
              <line x1={ax1} y1={l1} x2={bx1} y2={l2} stroke="currentColor" />
              <line x1={bx1} y1={l2} x2={bx2} y2={l2} stroke="currentColor" />
              <line x1={ax2} y1={l1} x2={bx2} y2={l2} stroke="currentColor" />
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
      <main className="z-0 flex flex-col items-center">{children}</main>
    </div>
  );
};
