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

  return (
    <div className="flex flex-col font-serif bg-white dark:bg-black">
      <nav className="sticky-nav flex dark:text-white text-3xl font-bold justify-between max-w-6xl w-full items-center my-2 pt-2 px-8 md:my-4 mx-auto">
        <Link href="/">
          <a className="w-10 h-10">Zf</a>
        </Link>
        <div className="flex items-center justify-center">
          <svg height="40" width="50%">
            <line x1={ax1} y1={l1} x2={ax2} y2={l1} stroke="currentColor" />
            <line x1={ax1} y1={l1} x2={bx1} y2={l2} stroke="currentColor" />
            <line x1={bx1} y1={l2} x2={bx2} y2={l2} stroke="currentColor" />
            <line x1={ax2} y1={l1} x2={bx2} y2={l2} stroke="currentColor" />
          </svg>
          <a className="w-10 h-10">(--)</a>
          <svg height="40" width="50%">
            <line x1={ax1} y1={l1} x2={ax2} y2={l1} stroke="currentColor" />
            <line x1={ax1} y1={l1} x2={bx1} y2={l2} stroke="currentColor" />
            <line x1={bx1} y1={l2} x2={bx2} y2={l2} stroke="currentColor" />
            <line x1={ax2} y1={l1} x2={bx2} y2={l2} stroke="currentColor" />
          </svg>
        </div>
        <button
          className="w-10 h-10"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {mounted && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              className="h-4 w-4 text-gray-800 dark:text-gray-200"
            >
              {theme === "dark" ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              )}
            </svg>
          )}
        </button>
      </nav>
      <main className="h-screen flex flex-col items-center my-20">
        {children}
      </main>
    </div>
  );
};
